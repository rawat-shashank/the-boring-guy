import Head from "next/head";
import { Container } from "../src/components/Container";
import { sitemetaData } from "../config";
import { getSortedPosts } from "../src/lib/posts";
import { BlogPost, Timeline, TypeWriter } from "../src/components";

export default function Home({ allPostsData }) {
  allPostsData.length = allPostsData.length > 5 ? 5 : allPostsData.length;

  const msgs = ["Human", "Developer", "Foodie"];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Head>
      <Container>
        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="text-3xl sm:text-5xl font-semibold text-gray-700 py-10">
            {sitemetaData.author}
            <div className="title-font text-5xl sm:text-8xl font-bold my-5">
              <TypeWriter messages={msgs} />
            </div>
          </div>
          <div className="mx-auto mt-10">
            <h1 className="title-font text-3xl font-bold my-5 text-gray-900">
              Latest BlogPosts
            </h1>
            <div className="py-4 divide-gray-100">
              {allPostsData.map(({ slug, date, title, summary, author }) => (
                <BlogPost
                  key={slug}
                  slug={slug}
                  date={date}
                  title={title}
                  summary={summary}
                  author={author}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto my-5">
            <Timeline />
          </div>
        </section>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts();

  return {
    props: {
      allPostsData,
    },
    revalidate: 60,
  };
}
