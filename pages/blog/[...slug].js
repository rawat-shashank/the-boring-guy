import Head from "next/head";
import Link from "next/link";
import {
  getPostdata,
  getFiles,
  formatSlug,
  getSortedPosts,
} from "../../src/lib/posts";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Avatar, Container, Header, PageTitle } from "../../src/components";

const components = { Container, Header, PageTitle, Link };

export default function Posts({ source, frontMatter, prev, next }) {
  // console.log(prev, next);

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.title} />
      </Head>
      <Container>
        <section>
          {/* <PageTitle title={frontMatter.title} /> */}
          <div className="text-left py-5 sm:px-5 text-5xl sm:text-6xl text-gray-900 font-semibold title-font mb-2 capitalize">
            {frontMatter.title}
          </div>
          <div className="flex flex-col content-center mt-10 sm:flex-row">
            <div className="sm:w-1/4 sm:pr-8 sm:py-8 divide-y-2">
              <div className="pb-6">
                <Avatar author={frontMatter.author} date={frontMatter.date} />
              </div>

              {prev && (
                <div className="py-6">
                  <div className="text-gray-400 text-xs tracking-widest mt-0.5">
                    <span className="mt-1 text-gray-500 text-sm mb-2">
                      PREVIOUS ARTICLE
                    </span>
                  </div>
                  <Link href={`/blog/${prev.slug}`} as={`/blog/${prev.slug}`}>
                    <a className="text-indigo-800 inline-flex items-center">
                      {prev.title}
                    </a>
                  </Link>
                </div>
              )}
              {next && (
                <div className="py-6">
                  <div className="text-gray-400 text-xs tracking-widest mt-0.5">
                    <span className="mt-1 text-gray-500 text-sm mb-2">
                      NEXT ARTICLE
                    </span>
                  </div>
                  <Link href={`/blog/${next.slug}`} as={`/blog/${next.slug}`}>
                    <a className="text-indigo-800 inline-flex items-center">
                      {next.title}
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <div className="sm:w-3/4 sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-6 sm:mt-0 text-left">
              <div className="prose mx-auto max-w-xs sm:max-w-2xl lg:max-w-4xl lg:prose-xl xl:max-w-5xl xl:prose-2xl">
                <MDXRemote {...source} components={components} />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
export async function getStaticPaths() {
  const posts = getFiles();
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const allPosts = getSortedPosts();
  const postIndex = allPosts.findIndex(
    (el) => formatSlug(el.slug) === params.slug.join("/")
  );

  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;

  const postContent = await getPostdata(params.slug.join("/"));
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      prev,
      next,
    },
  };
}
