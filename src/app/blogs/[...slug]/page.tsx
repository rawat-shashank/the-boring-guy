import matter from "gray-matter";
import {
  formatSlug,
  getFiles,
  getPostdata,
  getSortedPosts,
} from "../../../lib/posts";
import { Avatar, Container } from "../../../components";
import Link from "next/link";
import { MDXWrapper } from "./MDXWrapper";
import { serialize } from 'next-mdx-remote/serialize'

export async function generateStaticParams() {
  const posts = getFiles();
  return posts.map((p) => ({
    slug: formatSlug(p).split("/"),
  }));
}

export async function getBlog(slug: string[]) {
  const allPosts = getSortedPosts();
  const postIndex = allPosts.findIndex(
    (el) => formatSlug(el.slug) === slug.join("/")
  );

  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;

  const postContent = await getPostdata(slug.join("/"));
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content);

  return {
    source: mdxSource,
    frontMatter: data,
    prev,
    next,
  };
}

export default async function Page({ params }) {
  const { source, frontMatter, prev, next } = await getBlog(params.slug);
  return (
    <Container>
      <section>
        <div className="text-left py-5 sm:px-5 text-5xl sm:text-6xl text-gray-900 dark:text-white font-semibold title-font mb-2 capitalize">
          {frontMatter.title}
        </div>
        <div className="flex flex-col content-center mt-10 sm:flex-row">
          <div className="sm:w-1/4 sm:pr-8 sm:py-8 divide-y-2">
            <div className="pb-6">
              <Avatar author={frontMatter.author} date={frontMatter.date} />
            </div>

            {prev && (
              <div className="py-6">
                <div className="text-gray-600 dark:text-gray-400 text-xs tracking-widest mt-0.5">
                  <span className="mt-1 text-sm mb-2">PREVIOUS ARTICLE</span>
                </div>
                <Link
                  href={`/blogs/${prev.slug}`}
                  as={`/blogs/${prev.slug}`}
                  className="font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 inline-flex items-center"
                >
                  {prev.title}
                </Link>
              </div>
            )}
            {next && (
              <div className="py-6">
                <div className="text-gray-600 dark:text-gray-400 text-xs tracking-widest mt-0.5">
                  <span className="mt-1 text-sm mb-2">NEXT ARTICLE</span>
                </div>
                <Link
                  href={`/blogs/${next.slug}`}
                  as={`/blogs/${next.slug}`}
                  className="font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 inline-flex items-center"
                >
                  {next.title}
                </Link>
              </div>
            )}
          </div>
          <div className="sm:w-3/4 sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-6 sm:mt-0 text-left">
            <div className="prose dark:prose-dark mx-auto max-w-xs sm:max-w-2xl lg:max-w-4xl lg:prose-xl xl:max-w-5xl">
              <MDXWrapper source={source} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
