import React from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Head from "next/head";
const project = () => {
  return (
    <div>
      <Head>
        <title>Jian | Project</title>
      </Head>
      <Layout title="Jian | Project">
        <Project />
      </Layout>
    </div>
  );
}

export default project;
