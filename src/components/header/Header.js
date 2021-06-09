import Link from "next/link";
import { ThemeSwitch } from "..";
import { sitemetaData } from "../../../config";
import { headerNavLinks } from "./headerLinks";

export const Header = () => {
  return (
    <header className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container lg:w-5/6 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
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
          </a>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {headerNavLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <a className="mr-5 hover:text-gray-900 dark:hover:text-white">
                {link.title}
              </a>
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};
