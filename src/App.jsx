import React from 'react';
import './App.css';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import TopFold from './components/TopFold/TopFold';
import TrendingNfts from './components/TrendingNfts/TrendingNfts';

const App = () => {
  return (
    <div>
      <Header />
      <TopFold />
      <Brands />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default App;
