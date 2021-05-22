// import { ThemeProvider } from "theme-ui";
// import { customTheme } from "../theme";
import { Header, MDXCompProvider } from "../src/components";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <MDXCompProvider>
      <Header />
      <Component {...pageProps} />
    </MDXCompProvider>
  );
}

export default MyApp;
