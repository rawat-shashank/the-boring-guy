export const Avatar = ({ author, date, imgSrc }) => {
  return (
    <section>
      <div className="inline-flex items-center text-gray-600 dark:text-gray-400">
        {imgSrc ? (
          <img
            alt="blog"
            src={imgSrc}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
        ) : (
          <span className="w-12 h-12 rounded-full flex justify-center items-center flex-shrink-0 object-cover object-center bg-gray-300 dark:bg-gray-800 uppercase dark:text-indigo-400">
            {author
              .split(" ")
              .map((x) => x[0])
              .join("")}
          </span>
        )}

        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900 dark:text-white capitalize">
            {author}
          </span>
          <span className="text-xs tracking-widest mt-0.5">
            <span className="mt-1 text-sm mb-2">{date}</span>
          </span>
        </span>
      </div>
    </section>
  );
};
