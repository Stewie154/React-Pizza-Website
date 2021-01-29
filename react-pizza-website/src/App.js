import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/hero';
import Products from './components/products';
import { productData, productDataTwo } from './components/products/data';
import Feature from './components/feature';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose Your Favorite' data={productData} id="pizzas"/>
      <Feature/>
      <Products heading='For Those With a Sweet-Tooth...' data={productDataTwo} id="desserts"/>
      <Footer />
    </Router>
  );
}

export default App;
