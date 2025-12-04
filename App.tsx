import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <Pricing />
      <Contact />
    </Layout>
  );
}

export default App;