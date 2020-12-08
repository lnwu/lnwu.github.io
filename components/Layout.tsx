import React, { FC } from "react";
import Head from "next/head";

type LayoutProps = {
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title = "lnwu" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer>
      <hr />
      <span>
        {new Date().getFullYear()} © Powered by{" "}
        <a href="https://nextjs.org/">Nextjs</a>
      </span>
    </footer>
  </div>
);

export default Layout;
