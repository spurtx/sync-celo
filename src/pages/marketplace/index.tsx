import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import MarketplaceView from "container/Marketplace/MarketplaceView";

const Marketplace: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sync! | Marketplace</title>
        <meta name="Sync" content="Sync landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <MarketplaceView />
      </Layout>
    </>
  );
};

export default Marketplace;
