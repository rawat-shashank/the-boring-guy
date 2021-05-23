import { GithubIcon } from "./github";
import { LinkedinIcon } from "./linkedin";
import { MailIcon } from "./mail";

const components = {
  mail: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="ml-3 text-sm text-gray-500 transition hover:text-gray-700"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg svgClass={`fill-current h-${size} w-${size}`} />
    </a>
  );
};

export default SocialIcon;