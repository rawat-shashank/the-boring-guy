import "tailwindcss/tailwind.css";

import { ThemeProvider } from "next-themes";
import { Footer, Header } from "../src/components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
