import { NextPage } from 'next';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Hero from '../components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ColorSchemeToggle />
    </>
  );
};

export default Home;
