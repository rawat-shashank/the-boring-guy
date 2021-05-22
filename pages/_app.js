import { ThemeProvider } from "theme-ui";
import { customTheme } from "../theme";
import { Header, MDXCompProvider } from "../src/components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <MDXCompProvider>
        <Header />
        <Component {...pageProps} />
      </MDXCompProvider>
    </ThemeProvider>
  );
}

export default MyApp;
