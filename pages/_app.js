// import { ThemeProvider } from "theme-ui";
// import { customTheme } from "../theme";

import { Footer, Header, MDXCompProvider } from "../src/components";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <MDXCompProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MDXCompProvider>
  );
}

export default MyApp;
