// import { Flex, Heading, Box, Text } from "theme-ui";
import Link from "next/link";
import { getSortedPosts } from "../../src/lib/posts";
import { BlogPost, Container } from "../../src/components";

const BlogIndex = ({ allPostsData }) => {
  return (
    <Container>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
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
      </section>
    </Container>
  );
};
export default BlogIndex;
export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
