import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import './App.css';
import Contact from './components/Contact/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, delay: 80 });
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
