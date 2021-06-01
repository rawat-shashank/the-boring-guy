import { getSortedPosts } from "../../src/lib/posts";
import { BlogPost, Container, PageTitle } from "../../src/components";

const BlogIndex = ({ allPostsData }) => {
  return (
    <Container>
      <section className="text-gray-600 body-font overflow-hidden ">
        <PageTitle title="blog" />

        <div className="mx-auto mt-10">
          <div className="my-8 divide-gray-100">
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
