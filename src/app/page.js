'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Transformation from '../components/Transformation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Transformation />
      <Contact />
      <Footer />
    </main>
  );
}