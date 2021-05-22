import Link from "next/link";

export const BlogPost = ({ slug, date, title, excerpt, author }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-white">{author}</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-white title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{excerpt}</p>
        <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
          <a className="text-blue-400 inline-flex items-center mt-4">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
