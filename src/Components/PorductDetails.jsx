

//ProductCard.jsx
import React from "react";
import picture from "../Images/matel.png";
import picture1 from "../Images/ma.png.jpeg";
import picture2 from "../Images/ba.png";
import "./ProductCard.css";



// প্রোডাক্টের ডাটা
const products = [
  {
    id: 1,
    image: picture,
    title: "মেটাল সাইকেল প্লান্ট স্ট্যান্ড",
    description: `মেটাল সাইকেল প্লান্ট স্ট্যান্ড 
    লম্বা - ২৪", পাশে - ২৮"
    টব বসানোর স্পেস ৫"/৬"/৭",
    মজবুত ও প্লাস্টিক কোটিং রং করা, মরিচা ধরবে না।
    দারুন সব ইনডোর প্লান্ট দিয়ে সাজিয়ে নিতে পারেন।`,
    sold: "100+ bought in past month",
    price: "অফার মূল্য - ৯৯৯৳",
    oldPrice: 699.99,

  },
  {
    id: 2,
    image: picture1,
    title: "মেটাল বেলকনি রেক, ",
    description: `সাদা ১৫"/২৬"/৩৬" - টব বসানোর স্পেস ৮" 
৩ পিসের প্যাকেজ,  বেলকনি রেক গুলো যথেষ্ট মজবুত ও প্লাস্টিক কোটিং রং করা,  সহজেই ১০"-১২" যে কোন ভারী টব বসানো যাবে,  সাথে ১০টি টব ফ্রি দেওয়া হবে।`,
    sold: "100+ bought in past month",
    price: " অফার মূল্য 299.99 ৳",
    oldPrice: " - ১৮৫০৳",
  },
  {
    id: 3,
    image: picture2,
    title: "ব্রাজিলিয়ান লাকি উড",
    description: "ইনডোর প্লান্ট / ডেস্ক প্লান্ট আপনার টেবিলে দারুণ এই ইনডোর গাছটি রাখতে পারবেন,  শুধুমাত্র পাথর ও পানিতে রাখা যাবে, ৪-৫ দিন পরপর পানি চেঞ্জ করতে হবে",
    sold: "119+ bought in past month",
    price: "টব সহ মূল্য - ৩৫০৳",
    oldPrice: "799.99 ৳",
  },
];

const ProductCard = ({ scrollToOrder }) => {
  const handleClick = () => {
    scrollToOrder(); // এটা স্ক্রোল করবে OrderSubmit কম্পোনেন্টে
  };


  return (
    <div className="container mt-4">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="card shadow-lg p-3 h-100 d-flex flex-column">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold"  style={{ color: '#3F9E53', fontSize: '19px', marginRight: '5px' }}>{product.title}</h5>
                <p className="card-text text-muted flex-grow-1">{product.description}</p>
                <div className="d-flex align-items-center mb-2">
                  <small className="text-muted">{product.sold}</small>
                </div>
                <h4 className="fw-bold" style={{ color: '#3F9E53', fontSize: '19px', marginRight: '5px' }}>
                  {product.price}
                </h4>
                <p className="text-muted">
                  <del style={{ color: 'back', fontSize: '24px', marginRight: '5px' }}>আগের দাম: {product.oldPrice}</del>
                </p>
                <button onClick={handleClick} className="btn btn-primary w-100 mt-auto" style={{ backgroundColor: '#3F9E53' }}>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

