import Head from "next/head";

import SideBar from "../components/SideBar";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <Content />
      {/* <div className="bg-black h-screen">Hello</div> */}
    </div>
  );
}
