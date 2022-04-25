import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default App;
