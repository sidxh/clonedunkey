// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Features from './components/Features';
import Statistics from './components/Statistics';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Statistics />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
