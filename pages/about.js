import { sitemetaData } from "../config";
import { Container, PageTitle, SocialIcon } from "../src/components";

export default function About() {
  return (
    <Container>
      <section className="text-gray-600 body-font ">
        <PageTitle title="about" />

        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <img
              src={sitemetaData.image}
              alt="avatar"
              className="w-36 h-36 rounded-full  inline-flex items-center justify-center"
            />
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                {sitemetaData.author}
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p className="text-base">
                {sitemetaData.title} - Developer/Human
              </p>
              <span className="inline-flex mt-4 sm:mt-2 justify-center sm:justify-start">
                <SocialIcon kind="mail" href={`mailto:${sitemetaData.email}`} />
                <SocialIcon kind="linkedin" href={sitemetaData.linkedin} />
                <SocialIcon kind="github" href={sitemetaData.github} />
              </span>
            </div>
          </div>
          <div className=" sm:w-2/3 sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">
              A result oriented professional with over 6+ Years of experience in
              software Engineering and development. Skilled in Micro-Services,
              Micro-Frontend, Mobile apps with React native and Hybrid apps or
              WebView using Ionic (React/Angular).
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
