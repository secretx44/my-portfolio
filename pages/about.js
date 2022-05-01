import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Head from "next/head";
const about = () => {
  return (
    <div>
       <Head>
        <title>Jian | About</title>
      </Head>
    <Layout title="Jian | About">
      <About />
    </Layout>
    </div>
  );
};

export default about;
