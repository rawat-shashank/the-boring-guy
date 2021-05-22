import Head from "next/head";
import { getAllPostSlugs, getPostdata } from "../../src/lib/posts";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Container, Header } from "../../src/components";

const components = { Container, Header };

export default function Posts({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div>
        <div>
          <h1>{frontMatter.title}</h1>
          <span>
            {frontMatter.author}
            {" / "}
            <span>{frontMatter.date}</span>
          </span>
        </div>
        <div sx={{ mt: "4rem" }}>
          <div>
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </div>
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
