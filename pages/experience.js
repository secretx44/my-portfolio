import React from "react";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
const experience = () => {
  return (
    <div>
      <Head>
        <title>Jian | Experience</title>
      </Head>
    <Layout title="Jian | Experience">
      <Experience />
    </Layout>
    </div>
    
  );
};

export default experience;
