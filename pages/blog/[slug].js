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
      <Container>
        <div className="prose">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {frontMatter.date}
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {frontMatter.title}
                </h1>
              </div>
            </div>
          </header>

          <div sx={{ mt: "4rem" }}>
            <div>
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
