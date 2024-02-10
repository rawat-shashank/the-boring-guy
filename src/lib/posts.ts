import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getAllFilesRecursively from "./utils/files";

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), "src/blogs");

export const getSortedPosts = () => {
  //Reads all the files in the post directory
  // const fileNames = fs.readdirSync(postDirectory);
  const fileNames = getAllFilesRecursively(postDirectory);

  const allPostsData = fileNames.map((file) => {
    const filename = file.slice(postDirectory.length + 1).replace(/\\/g, "/");
    const slug = filename.replace(".mdx", "");

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(file, "utf8");
    const { data } = matter(fileContents);

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );
    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

//Get Slugs
export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

//Get Post based on Slug
export const getPostdata = async (slug) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  return fs.readFileSync(fullPath, "utf8");
};

export function getFiles() {
  const prefixPaths = path.join(postDirectory);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  );
}

export function formatSlug(slug: string): string {
  const regex = /\.?(mdx|md)$/;
  return slug.replace(regex, "");
}
