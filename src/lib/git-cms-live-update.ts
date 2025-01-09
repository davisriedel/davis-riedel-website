import fs from 'fs';
import path from 'path';

// GitHub API details
const GITHUB_API_URL = 'https://api.github.com';
const OWNER = 'davisriedel';
const REPO = 'davis-riedel-website';
const FOLDER_PATH = 'cms'; // Folder path in GitHub repo
const BRANCH = 'main'; // The branch to fetch from
const LOCAL_DIR = path.join(process.cwd(), "cms"); // Local folder to replace

// Define types for GitHub API responses
interface GitHubFile {
  name: string;
  path: string;
  type: 'file' | 'dir';
  download_url: string;
}

const fetchFromGitHub = async (url: string) => {
  const headers: Record<string, string> = {};

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

const fetchGitHubFolderContents = async (): Promise<GitHubFile[]> => {
  const url = `${GITHUB_API_URL}/repos/${OWNER}/${REPO}/contents/${FOLDER_PATH}?ref=${BRANCH}`;
  return await fetchFromGitHub(url);
};

const downloadFile = async (url: string, localPath: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download file: ${url}`);
  }

  const buffer = await response.arrayBuffer();
  fs.writeFileSync(localPath, Buffer.from(buffer));
  console.log(`Downloaded: ${localPath}`);
};

export const updateCmsFilesFromGitHub = async (): Promise<void> => {
  try {
    console.log('Fetching folder contents from GitHub...');
    const files = await fetchGitHubFolderContents();

    // Remove existing local folder
    if (fs.existsSync(LOCAL_DIR)) {
      fs.rmSync(LOCAL_DIR, { recursive: true, force: true });
      console.log(`Deleted existing folder: ${LOCAL_DIR}`);
    }

    // Recreate the local folder
    fs.mkdirSync(LOCAL_DIR, { recursive: true });

    // Download each file and save locally
    for (const file of files) {
      if (file.type === 'file') {
        console.log("Downloading from GitHub: ", file);
        const localPath = path.join(LOCAL_DIR, file.name);
        await downloadFile(file.download_url, localPath);
      }
    }

    console.log(`Replaced local folder with GitHub content: ${LOCAL_DIR}`);
  } catch (error) {
    console.error('Error replacing local folder:', error);
  }
};
