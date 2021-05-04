import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Landing Pages</title>
        <meta
          name='description'
          content='Curation of Landing Pages build with React JS and TailwindCSS '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
