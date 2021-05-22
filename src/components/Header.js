/** @jsxImportSource theme-ui */

import Head from "next/head";
import Link from "next/link";
import { Box } from "theme-ui";

export const Header = () => {
  return (
    <>
      <Head>
        <title>theBoringGuy</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ variant: "containers.page" }}>
        <header
          sx={{
            display: "flex",
            alignItems: "center",
            variant: "styles.header",
          }}
        >
          <Link
            href="/"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            Hello
          </Link>
          <div sx={{ mx: "auto" }} />
          <Link
            href="/blog"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            Blog
          </Link>
          <Link
            href="/about"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            About
          </Link>
        </header>
      </Box>
    </>
  );
};
