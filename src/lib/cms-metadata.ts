import { promises as fs } from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

export class CmsMetadata<Metadata extends { slug: string }> {
	constructor(
		private readonly ymlFilePath: string,
		private readonly ymlKey: string,
	) {}

	public async getAll(): Promise<Metadata[]> {
		const file = await fs.readFile(
			path.join(process.cwd(), this.ymlFilePath),
			"utf8",
		);
		const data = yaml.load(file) as Record<string, Metadata[]>;
		return data[this.ymlKey] ?? [];
	}

	public async generateMetadataMap(): Promise<Record<string, Metadata>> {
		return (await this.getAll()).reduce(
			(acc, data) => {
				acc[data.slug] = data;
				return acc;
			},
			{} as Record<string, Metadata>,
		);
	}
}
