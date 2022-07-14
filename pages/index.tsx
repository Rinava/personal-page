import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import FlipCards from '../components/FlipCards';
import Header1 from './../components/commons/Header1';

const Home: NextPage = () => {
  return (
    <Layout h1='Lara Mateo' h2="You are asking yourself, who is she?">
      <FlipCards />
    </Layout>
  );
};

export default Home;
