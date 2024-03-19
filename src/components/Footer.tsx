import { SocialIcon } from ".";
import { siteMetaData } from "../constants/config";

export const Footer = (): JSX.Element => {
  const date = new Date();
  return (
    <footer className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container lg:w-4/6 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 dark:text-white sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          Update © &nbsp;
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcon kind="mail" href={`mailto:${siteMetaData.email}`} />
          <SocialIcon kind="linkedin" href={siteMetaData.linkedin} />
          <SocialIcon kind="github" href={siteMetaData.github} />
        </span>
      </div>
    </footer>
  );
};
