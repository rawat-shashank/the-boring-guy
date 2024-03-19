import { promises as fs } from "fs";
import { resolve } from "path";

/**
 * Recursively walks through a directory structure and returns an array of all filenames within the directory and its subdirectories.
 *
 * @param folder - The path to the directory to walk.
 * @returns A Promise that resolves to an array of all filenames within the directory and its subdirectories.
 */
const getAllFilesRecursively = async (folder: string): Promise<string[]> => {
  const fullPath = resolve(folder); // Ensure absolute path for consistency
  const files = await fs.readdir(fullPath);

  const filePaths: string[] = [];
  for (const file of files) {
    const filePath = resolve(fullPath, file);
    const isFile = await fs.stat(filePath).then((stats) => stats.isFile());
    if (isFile) {
      filePaths.push(filePath);
    } else {
      const subdirectoryFiles = await getAllFilesRecursively(filePath);
      filePaths.push(...subdirectoryFiles); // Spread syntax for efficient concatenation
    }
  }
  return filePaths;
};

export default getAllFilesRecursively;
