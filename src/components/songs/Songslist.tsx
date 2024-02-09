import Image from "next/image";
import songs from "./songs.json";
import Link from "next/link";

export const Songslist = () => {
  return (
    <div>
      <h1 className="title-font text-3xl font-bold my-4 text-gray-900 dark:text-white">
        Listening to
      </h1>
      <div className="divide-y-2 sm:px-4">
        {songs &&
          Object.keys(songs)
            .sort((a:any, b:any) => b - a)
            .map((key) => {
              return (
                <div key={key} className="my-8">
                  <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font py-4">
                    {key}
                  </h2>
                  <div className="flex flex-wrap -m-4">
                    {songs[key].map(({ title, url, id, channel }) => {
                      return (
                        <Link
                          href={url}
                          key={url}
                          className="p-2 sm:w-1/2 w-full"
                          target="_blank"
                          rel="noopener"
                        >
                          <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-start">
                            <Image
                              src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                              height="80"
                              width="160"
                              className="flex-shrink-0 mr-4"
                              alt="no image found"
                            />
                            <div className="h-full">
                              <span className="title-font font-medium dark:text-white">
                                {title}
                              </span>
                              <p className="leading-relaxed text-base">
                                {channel}
                              </p>
                            </div>
                          </div>
                        </Link>
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
