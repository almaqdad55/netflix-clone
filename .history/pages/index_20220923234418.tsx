import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/netflix_logo.ico" />
      </Head>
      <h1>Netflix</h1>

      <main></main>
    </div>
  );
};

export default Home;
