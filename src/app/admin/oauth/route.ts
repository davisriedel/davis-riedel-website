import { NextResponse } from "next/server";

const { OAUTH_GITHUB_CLIENT_ID } = process.env;

export const GET = () => {
	if (!OAUTH_GITHUB_CLIENT_ID) {
		throw new Error(
			"OAUTH_GITHUB_CLIENT_ID is not defined in environment variables.",
		);
	}

	const params = new URLSearchParams({
		client_id: OAUTH_GITHUB_CLIENT_ID,
		scope: "repo,user",
	});

	return NextResponse.redirect(
		`https://github.com/login/oauth/authorize?${params.toString()}`,
	);
};
