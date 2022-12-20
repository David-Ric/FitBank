import React, { useEffect, useState } from 'react';
import '../styles/pages-styles/Home.scss';
import '../styles/global.scss';
import CarouselHome from '../components/home/Carousell-Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Infratech from '../components/home/Infratech';
import Soluction from '../components/home/Soluction';
import Services from '../components/home/Services';
import BankHand from '../components/home/BankHand';
import Count_FitBank from '../components/home/Count_FitBank';


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div className='content-home'>
        <CarouselHome />
        <div className='containner'>
          <Infratech />
          <Services />
        </div>
        <BankHand />
        <Count_FitBank />
        <Soluction />
      </div>
      <Footer />
    </div>
  );
}
