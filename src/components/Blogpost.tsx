import Link from "next/link";
import { Avatar } from ".";

export const BlogPost = ({ slug, date, title, summary, author }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap py-12">
      <div className="mb-6 flex flex-col sm:pr-8 sm:w-1/3">
        <Avatar author={author} date={date} />
      </div>
      <div className="sm:w-2/3  sm:flex-grow sm:pl-8">
        <Link
          key={slug}
          href={`/blogs/${slug}`}
          as={`/blogs/${slug}`}
          className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2"
        >
          {title}
        </Link>
        <p className="leading-relaxed">
          {summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
        </p>
        <div className="flex items-center flex-wrap ">
          <Link
            key={slug}
            href={`/blogs/${slug}`}
            as={`/blogs/${slug}`}
            className="font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 inline-flex items-center mt-4"
          >
            Read Blog
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
