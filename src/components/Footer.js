import { SocialIcon } from ".";
import { sitemetaData } from "../../config";

export const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container lg:w-5/6 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{sitemetaData.title}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()}
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
