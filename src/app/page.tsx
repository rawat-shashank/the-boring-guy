import { BlogPost, Container, SongsList, TypeWriter } from "../components";
import { SONGS_LIST, TYPE_WRITER, siteMetaData } from "../constants/config";
import { getSortedPosts } from "../lib/posts";

async function getProjects() {
  const allPostsData = await getSortedPosts();
  return allPostsData;
}

export default async function Page() {
  const allPostsData = await getProjects();

  return (
    <Container>
      <section className="text-gray-600 dark:text-gray-400 body-font overflow-hidden ">
        <div className="text-3xl sm:text-5xl font-semibold text-gray-700 dark:text-gray-200 py-10 sm:pt-24 sm:pb-40">
          {siteMetaData.author}
          <div className="title-font text-5xl sm:text-8xl font-bold my-5 text-gray-800 dark:text-white sm:pt-16">
            <TypeWriter messages={TYPE_WRITER.MESSAGES} />
          </div>
        </div>
        <div className="mx-auto mt-10">
          <h1 className="title-font text-3xl font-bold my-5 text-gray-900 dark:text-white">
            Latest BlogPosts
          </h1>
          <div className="py-4 divide-y-2">
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
          <SongsList songs={SONGS_LIST} />
        </div>
      </section>
    </Container>
  );
}
