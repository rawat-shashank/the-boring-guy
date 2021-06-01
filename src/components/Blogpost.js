import Link from "next/link";
import { Avatar } from ".";

export const BlogPost = ({ slug, date, title, summary, author }) => {
  return (
    <div className="py-4 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <Avatar author={author} date={date} />
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">
          {summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
        </p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100">
          <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
            <a className="text-indigo-400 inline-flex items-center mt-4">
              Learn More
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
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
