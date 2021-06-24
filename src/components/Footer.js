import { SocialIcon } from ".";
import { sitemetaData } from "../../config";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container lg:w-4/6 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
          <span className="ml-3 text-xl">Updated on</span>
        </div> */}
        <p className="text-sm text-gray-500 dark:text-white sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          Update © &nbsp;
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcon kind="mail" href={`mailto:${sitemetaData.email}`} />
          <SocialIcon kind="linkedin" href={sitemetaData.linkedin} />
          <SocialIcon kind="github" href={sitemetaData.github} />
        </span>
      </div>
    </footer>
  );
};
