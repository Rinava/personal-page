import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import FlipCards from '../components/FlipCards';

const Home: NextPage = () => {
  return (
    <Layout>
      <FlipCards />
    </Layout>
  );
};

export default Home;
