"use client";
import { useState } from "react";
import { SearchBlog } from "../../components/SearchBlog";
import { BlogPost } from "../../components";

export const FilterableBlogs = ({ allPostsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const postsData = allPostsData.filter((el) => {
    const searchContent = el.author + el.title + el.summary;
    return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
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
  );
};
