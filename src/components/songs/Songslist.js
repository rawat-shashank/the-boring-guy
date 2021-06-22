import songs from "./songs.json";
import Link from "next/link";

export const Songslist = () => {
  return (
    <div>
      <h1 className="title-font text-3xl font-bold my-4 text-gray-900 dark:text-white">
        I am listening
      </h1>
      <div className="divide-y-2 sm:px-4">
        {songs &&
          Object.keys(songs)
            .sort((a, b) => b - a)
            .map((key) => {
              return (
                <div key={key} className="my-8">
                  <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font py-4">
                    {key}
                  </h2>
                  <div className="flex flex-wrap -m-4">
                    {songs[key].map(({ title, url }) => {
                      return (
                        <div className="p-2 sm:w-1/2 w-full" key={title}>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="text-green-500 w-5 h-5 flex-shrink-0 mr-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <Link href={url} key={url}>
                              <a
                                className="title-font font-medium dark:text-white"
                                target="_blank"
                                rel="noopener"
                              >
                                {title}
                              </a>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};
