import Head from 'next/head';
import {
  Hero,
  Header,
  Features,
  FeaturesBlocks,
  Testimonials,
  Newsletter,
} from 'components';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Head>
        <title>Awesome Landing Pages</title>
        <meta
          name='description'
          content='Curation of Landing Pages build with React JS and TailwindCSS '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='flex-grow'>
        {/*  Page sections */}
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}
