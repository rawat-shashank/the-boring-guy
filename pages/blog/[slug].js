/** @jsxImportSource theme-ui */

import Head from "next/head";
import { getAllPostSlugs, getPostdata } from "../../src/lib/posts";
import { Box, Text } from "theme-ui";
import matter from "gray-matter";
import MyBackground from "../../src/components/MyBackground";
import MyButton from "../../src/components/MyButton";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const components = { MyBackground, MyButton };

export default function Posts({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box sx={{ variant: "containers.page" }}>
        <Box sx={{ mt: "4rem", textAlign: "center" }}>
          <h1>{frontMatter.title}</h1>
          <Text
            sx={{
              width: ["80%", "50%"],
              mx: "auto",
            }}
          >
            {frontMatter.author}
            {" / "}
            <span>{frontMatter.date}</span>
          </Text>
        </Box>
        <Box sx={{ mt: "4rem" }}>
          <Box>
            <MDXRemote {...source} components={components} />
          </Box>
        </Box>
      </Box>
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
