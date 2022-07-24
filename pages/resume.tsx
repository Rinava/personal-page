import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Resume from '../components/Resume';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Lara Mateo</title>
        <meta name='description' content='How to contact me' />
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
      <Layout
        title='My resume'
        subtitle='About my profesional experience'
        column>
        <Resume />
      </Layout>
    </>
  );
};

export default Home;
