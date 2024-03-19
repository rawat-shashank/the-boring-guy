export type TimelineProps = {
  [year: string]: {
    title: string;
    text: string;
  }[];
};

export const Timeline = ({
  timeline,
}: {
  timeline: TimelineProps;
}): JSX.Element => {
  return (
    <div>
      <h1 className="title-font text-3xl font-bold my-4 text-gray-900 dark:text-white">
        Timeline
      </h1>
      <div className="divide-y-2 sm:px-14">
        {timeline &&
          Object.keys(timeline)
            .sort((a, b) => b.localeCompare(a))
            .map((key) => {
              return (
                <div key={key} className="my-8">
                  <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font py-4">
                    {key}
                  </h2>
                  {timeline[key].map((item) => {
                    return (
                      <div key={item.title}>
                        <div className="flex items-center  py-1">
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
                          <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font">
                            {item.title}
                          </h2>
                        </div>
                        <p className="leading-relaxed text-base pl-9">
                          {item?.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
      </div>
    </div>
  );
};
