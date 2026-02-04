import fs from "node:fs";
import path from "node:path";

export default function writeDecapConfig() {
  // Load the YAML file
  const filePath = path.join(
    process.cwd(),
    "scripts",
    "write-decap-config",
    "config.yml"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Substitute environment variables
  const substitutedContent = fileContents.replace(
    /\$\{([^}]+)\}/g,
    (_, envVar) => {
      return process.env[envVar] || "";
    }
  );

  const outputPath = path.join(process.cwd(), "public", "admin", "config.yml");
  fs.writeFileSync(outputPath, substitutedContent);
}
