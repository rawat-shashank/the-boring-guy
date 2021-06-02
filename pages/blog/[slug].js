import Head from "next/head";
import { getAllPostSlugs, getPostdata } from "../../src/lib/posts";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Avatar, Container, Header, PageTitle } from "../../src/components";

const components = { Container, Header, PageTitle };

export default function Posts({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Container>
        <div className="flex flex-col content-center mt-10 sm:flex-row">
          <div className="sm:w-1/4 sm:pr-8 sm:py-8">
            <Avatar author={frontMatter.author} date={frontMatter.date} />
          </div>
          <div className="sm:w-3/4 sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
            <div className="mb-10">
              <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {frontMatter.title}
              </h1>
            </div>
            <div className="prose max-w-xs sm:max-w-2xl lg:max-w-4xl lg:prose-xl xl:max-w-5xl xl:prose-2xl">
              <MDXRemote {...source} components={components} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
