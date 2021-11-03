import Head from "next/head";

import SideBar from "../sidebar";
// import SideBar from "../components/sidebar";
// import Content from "../components/Content";

export default function Layout({ children }) {
  return (
    <div className="flex selection:bg-green-400">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>{children}</main>
      {/* <Content /> */}
    </div>
  );
}
