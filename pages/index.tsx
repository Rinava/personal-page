import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import FlipCards from '../components/FlipCards';
import Header1 from './../components/commons/Header1';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lara Mateo&apos;s Portfolio</title>
        <meta name='description' content='Who is Lara Mateo' />
        <meta name='theme-color' content='#2196f3' />

        <meta httpEquiv='content-language' content='en-us' />
        <meta name='chartSet' charSet='utf-8' />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, Portfolio, React, Next.js, Developer, Frontend, Lara Mateo'
        />
        <meta name='author' content='Lara Mateo' />
        <meta name='copyright' content='Property of Lara Mateo' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Layout h1='Lara Mateo' h2='You are asking yourself, who is she?'>
        <FlipCards />
      </Layout>
    </>
  );
};

export default Home;
