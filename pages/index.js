import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Jian Godito </title>{" "}
        <meta name="keywords" content="JianGodito" />
      </Head>
      <Hero />
    </div>
  );
}
