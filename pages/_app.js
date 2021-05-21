import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import { customTheme } from "../theme";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
