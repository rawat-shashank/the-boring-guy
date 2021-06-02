import { Container } from "../src/components/Container";
import { sitemetaData } from "../config";
import { getSortedPosts } from "../src/lib/posts";
import { BlogPost, TypeWriter } from "../src/components";

export default function Home({ allPostsData }) {
  allPostsData.length = allPostsData.length > 5 ? 5 : allPostsData.length;

  const msgs = ["Human", "Developer", "Foodie"];

  return (
    <Container>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="text-3xl sm:text-5xl font-semibold text-gray-700 py-10">
          {sitemetaData.author}
          <div className="title-font text-5xl sm:text-8xl font-bold my-">
            <TypeWriter heading={"I'm a :"} messages={msgs} />
          </div>
        </div>
        <div className="mx-auto mt-10">
          <h1 className="title-font text-3xl font-bold mt-4 text-gray-900">
            Latest BlogPosts
          </h1>
          <div className="py-8 divide-gray-100">
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
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts();

  return {
    props: {
      allPostsData,
    },
  };
}
