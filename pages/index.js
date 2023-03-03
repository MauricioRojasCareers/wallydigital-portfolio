import Head from "next/head";
import Landing from "@/components/Landing";
import SecondNavbar from "@/components/SecondNavbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wally Digital | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SecondNavbar></SecondNavbar>
      <Landing></Landing>
    </>
  );
}
