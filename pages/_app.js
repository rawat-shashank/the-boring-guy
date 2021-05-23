// import { ThemeProvider } from "theme-ui";
// import { customTheme } from "../theme";

import { Footer, Header, MDXCompProvider } from "../src/components";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
