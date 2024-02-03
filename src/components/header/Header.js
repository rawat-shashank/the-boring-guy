import Link from "next/link";
import { ThemeSwitch } from "..";
import { sitemetaData } from "../../../config";
import { headerNavLinks } from "./headerLinks";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container lg:w-4/6 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0"
        >
          <Logo className="w-14 h-14 text-gray-800 dark:text-white" />
          <span className="ml-3 text-xl">{sitemetaData.title}</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {headerNavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="mr-5 font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200"
            >
              {link.title}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};
