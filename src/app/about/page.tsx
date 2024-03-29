import Image from "next/image";
import { Container, PageTitle, SocialIcon, Timeline } from "../../components";
import { TIMELINE, siteMetaData } from "../../constants/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};

export default async function Page() {
  return (
    <Container>
      <section className="text-gray-600 dark:text-gray-400 body-font ">
        <PageTitle title="about" />

        <div className="flex flex-col sm:flex-row mt-20">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <Image
              src={siteMetaData.image}
              alt="avatar"
              className="w-36 h-36 rounded-full  inline-flex items-center justify-center"
              width={36}
              height={36}
            />
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="title-font text-3xl font-bold mt-4 text-gray-900 dark:text-white">
                {siteMetaData.author}
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p className="text-base">
                {siteMetaData.title} - Developer/Human
              </p>
              <span className="inline-flex mt-4 sm:mt-2 justify-center sm:justify-start">
                <SocialIcon kind="mail" href={`mailto:${siteMetaData.email}`} />
                <SocialIcon kind="linkedin" href={siteMetaData.linkedin} />
                <SocialIcon kind="github" href={siteMetaData.github} />
              </span>
            </div>
          </div>
          <div className=" sm:w-2/3 sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
            <h1 className="mt-4 sm:pr-16 text-2xl font-medium title-font text-gray-900 dark:text-white">
              Professionally
            </h1>
            <p className="leading-relaxed text-lg mb-4">
              A result oriented professional with over 6+ Years of experience in
              software Engineering and development. Skilled in Micro-Services,
              Micro-Frontend, Mobile apps with React native and Hybrid apps or
              WebView using Ionic (React/Angular).
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Started the carrier with Amdocs India. New city, new dreams and
              after many years here I am. In this journey I have switched to
              many technologies, companies and projects domains like healthcare,
              scrum, productivity, personal finance, interactive map-based
              applications.
            </p>
            <h1 className="mt-4 sm:pr-16 text-2xl font-medium title-font text-gray-900 dark:text-white">
              Personally
            </h1>
            <p className="leading-relaxed text-lg mb-4">
              “The time you enjoy wasting, is not wasted time” by John Lennon is
              words to live by. And I like to waste my time playing games,
              listening to some music, and trying my best to understand anything
              that piques my interest. And yes, I waste most of time doing the
              same thing I do for living “Coding”.
            </p>
          </div>
        </div>
        <div className="mx-auto my-5">
          <Timeline timeline={TIMELINE} />
        </div>
      </section>
    </Container>
  );
}
