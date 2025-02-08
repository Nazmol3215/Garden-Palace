import React from 'react';

const BuyNowButton = ({ scrollToOrder }) => {
  const handleClick = () => {
    scrollToOrder(); // এটা স্ক্রোল করবে OrderSubmit কম্পোনেন্টে
  };

  return (
    <>
   <button
  onClick={handleClick}
  style={{
    background: 'linear-gradient(135deg, #ff4e50,  #4CAF50)',
    border: '2px solid  #4CAF50',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 25px',
    borderRadius: '8px',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    textTransform: 'uppercase',
    marginLeft: '36px',
    marginTop: '10px',
    width: '340px',
  }}
>
  Buy Now
</button>


 

    </>
  );
};

export default BuyNowButton;

