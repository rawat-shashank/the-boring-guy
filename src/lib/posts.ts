import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BLOGS_URL, DATE_FORMAT } from "../constants/config";
import getAllFilesRecursively from "./utils/files";

type FilePath = string;
export type Blog = {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
};

//Finding directory named "posts" from the current working directory of Node.
const postDirectory: string = path.join(process.cwd(), BLOGS_URL);

/**
 * Asynchronously retrieves all posts, parses their frontmatter, and returns them sorted by date in descending order.
 *
 * @throws {Error} - If there's an error reading the post directory or parsing MDX files.
 * @returns {Promise<Array<{ Blog }>>} - A promise that resolves to an array of post objects, each with a `slug` and frontmatter data (including a formatted `date`).
 */
export async function getSortedPosts(): Promise<Blog[]> {
  try {
    const filePaths: FilePath[] = await getAllFilesRecursively(postDirectory);

    const allPostsData = await Promise.all(
      filePaths.map(async (file) => {
        const filename = file
          .slice(postDirectory.length + 1)
          .replace(/\\/g, "/");
        const slug = filename.replace(".mdx", "");

        const fileContents = await fs.promises.readFile(file, "utf8"); // Use fs.promises for async/await
        const { data } = matter(fileContents);

        const formattedDate = new Date(data.date).toLocaleDateString(
          "en-IN",
          DATE_FORMAT as Intl.DateTimeFormatOptions
        );

        return {
          ...(data as Blog),
          date: formattedDate,
          slug,
        };
      })
    );

    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by descending order (newest first)
    });
  } catch (error) {
    throw new Error(`Error reading posts: ${error}`);
  }
}

/**
 * Synchronously retrieves an array of objects representing all post slugs.
 *
 * Each object has a `params` property with a `slug` key containing the post's slug
 * (without the ".mdx" extension).
 *
 * @throws {Error} - If the specified post directory cannot be read.
 * @returns {Array<{ params: { slug: string } }>} - An array of objects with slug information.
 */
export function getAllPostSlugs(): { params: { slug: string } }[] {
  try {
    const fileNames = fs.readdirSync(postDirectory);
    return fileNames.map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx$/, ""), // Use regular expression for robust removal
      },
    }));
  } catch (error) {
    throw new Error(
      `Error reading post directory: ${postDirectory}. Reason: ${error}`
    );
  }
}

/**
 * Asynchronously reads and returns the content of a Markdown (MDX) post file.
 *
 * @param {string} slug - The slug of the post to retrieve (e.g., "my-post").
 * @throws {Error} - If the specified post file is not found or cannot be read.
 * @returns {Promise<string>} - A promise that resolves to the content of the post file as a string, or rejects if an error occurs.
 */
export async function getPostData(slug: string): Promise<string> {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);

  try {
    return fs.promises.readFile(fullPath, "utf8");
  } catch (error) {
    throw new Error(`Error reading post file: ${fullPath}. Reason: ${error}`);
  }
}

/**
 * Asynchronously retrieves all files recursively from a specified directory,
 * returning only relative paths within the `postDirectory`.
 *
 * @param postDirectory {string} The directory containing the blog posts.
 * @returns {Promise<string[]>} A Promise that resolves to an array of relative file paths.
 * @throws {Error} If there's an error accessing the directory.
 */
export const getFiles = async (): Promise<string[]> => {
  const prefixPaths = path.join(postDirectory);

  try {
    const files = await getAllFilesRecursively(prefixPaths);
    return files.map((file) =>
      file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
    );
  } catch (error) {
    throw new Error(`Error accessing directory: ${error.message}`);
  }
};

/**
 * Formats a slug by removing any trailing ".md" or ".mdx" file extensions.
 *
 * @param slug - The slug string to format.
 * @returns - The formatted slug without the file extension.
 */
export const formatSlug = (slug: string): string => {
  const regex = /\.?(mdx|md)$/i; // Optional "i" flag for case-insensitive matching
  return slug.replace(regex, "");
};
