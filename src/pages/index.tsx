import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../container/Landing/Landing";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sync!</title>
        <meta name="Sync" content="Sync landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Landing />
      </Box>
    </div>
  );
};

export default Home;
