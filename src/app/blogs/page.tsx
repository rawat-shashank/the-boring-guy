import { Metadata } from "next";
import { Container, PageTitle } from "../../components";
import { getSortedPosts } from "../../lib/posts";
import { FilterableBlogs } from "./FilterableBlogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs listing page",
};

async function getProjects() {
  const allPostsData = await getSortedPosts();
  return allPostsData;
}

export default async function Page() {
  const allPostsData = await getProjects();

  return (
    <Container>
      <section className="text-gray-600 dark:text-gray-400 body-font overflow-hidden w-full">
        <PageTitle title="blog" />
        <FilterableBlogs allPostsData={allPostsData} />
      </section>
    </Container>
  );
}
