import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Inform from '../../components/inform/inform';
import Search from '../../components/search/search';
import Products from '../../components/products/products';
import Flag from '../../components/flag/flag';

const Home = () => {
  return (
    <div>
      <Header />
      <Inform />
      <Search />
      <Products/>
      <Flag/>
      <Footer />
    </div>
  );
};

export default Home;