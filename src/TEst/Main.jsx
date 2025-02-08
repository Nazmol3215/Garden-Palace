//Main.jsx

import React, { useRef } from 'react';
import BuyNowButton from './BuyNowButton';
import OrderSubmit from './OrderSubmit';
import MarqueeBanner from '../Components/ScrollText';
// import TrendingAndRecommended from '../Components/TrendingAndRecommended';
import ProductGrid from '../Components/ProductGrid';
import ProductCard from '../Components/PorductDetails';



const App = () => {
  const orderSubmitRef = useRef(null);

  const scrollToOrder = () => {
    if (orderSubmitRef.current) {
      orderSubmitRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>

      <div style={{ height: '10px' }}></div>

      <MarqueeBanner />
      <BuyNowButton scrollToOrder={scrollToOrder} />
      <ProductCard scrollToOrder={scrollToOrder} />
      <ProductGrid scrollToOrder={scrollToOrder} />
      <OrderSubmit ref={orderSubmitRef} />
      {/* <TrendingAndRecommended /> */}
    </div>
  );
};

export default App;
