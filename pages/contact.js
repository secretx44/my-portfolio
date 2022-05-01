import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Head from "next/head";
const contact = () => {
  return (
    <div>
       <Head>
        <title>Jian | Contact</title>
      </Head>
      <Layout title="Jian | Contact">
        <Contact />
      </Layout>
    </div>
  );
};

export default contact;
