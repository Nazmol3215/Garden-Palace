import React, { useRef } from 'react';
import BuyNowButton from './BuyNowButton';
import OrderSubmit from './OrderSubmit';
import MarqueeBanner from '../Components/ScrollText';
import PorductDetails from '../Components/PorductDetails';
// import TrendingAndRecommended from '../Components/TrendingAndRecommended';
import ProductGrid from '../Components/ProductGrid';



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
      <PorductDetails />
      {/* <TrendingAndRecommended /> */}
      <ProductGrid />
      <OrderSubmit ref={orderSubmitRef} />
    </div>
  );
};

export default App;
