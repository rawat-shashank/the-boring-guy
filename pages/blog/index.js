import Head from "next/head";
import { getSortedPosts } from "../../src/lib/posts";
import {
  BlogPost,
  Container,
  PageTitle,
  SearchBlog,
} from "../../src/components";
import { useState } from "react";

const BlogIndex = ({ allPostsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const postsData = allPostsData.filter((el) => {
    const searchContent = el.author + el.title + el.summary;
    return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Page" />
      </Head>
      <Container>
        <section className="text-gray-600 body-font overflow-hidden ">
          <PageTitle title="blog" />

          <div className="mx-auto mt-20">
            <SearchBlog handleSearch={setSearchTerm} />
            <div className="py-8 divide-y-2">
              {postsData.map(({ slug, date, title, summary, author }) => (
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
        </section>
      </Container>
    </>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
    revalidate: 60,
  };
}
