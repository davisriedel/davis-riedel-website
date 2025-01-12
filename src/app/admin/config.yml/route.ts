import fs from "node:fs";
import path from "node:path";
import Handlebars from "handlebars";

export async function GET() {
	const filePath = path.join(
		process.cwd(),
		"src",
		"app",
		"admin",
		"config.yml",
		"config.yml.hbs",
	);
	const templateContent = fs.readFileSync(filePath, "utf8");

	const template = Handlebars.compile(templateContent);

	let decap_url = "undefined (DECAP_BASE_URL)";
	if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
		const url = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
		if (url) decap_url = url;
	} else {
		const url =
			process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ?? "undefined (DECAP_BASE_URL)";
		if (url) decap_url = url;
	}

	const yamlContent = template({ ...process.env, DECAP_BASE_URL: decap_url });

	return new Response(yamlContent, {
		headers: {
			"Content-Type": "application/x-yaml",
		},
	});
}
