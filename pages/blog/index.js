// import { Flex, Heading, Box, Text } from "theme-ui";
import Link from "next/link";
import { getSortedPosts } from "../../src/lib/posts";
import { BlogPost, Container } from "../../src/components";

const BlogIndex = ({ allPostsData }) => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-800">
          {allPostsData.map(({ slug, date, title, excerpt, author }) => (
            <BlogPost
              key={slug}
              slug={slug}
              date={date}
              title={title}
              excerpt={excerpt}
              author={author}
            />
          ))}
        </div>
      </div>
    </section>
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
