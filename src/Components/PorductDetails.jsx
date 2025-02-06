import React from "react";
import picture from "../Images/i2png.jpg";
import picture1 from "../Images/i3.png";
import picture2 from "../Images/i7.pg.jpg";
import "./ProductCard.css";



// প্রোডাক্টের ডাটা
const products = [
  {
    id: 1,
    image:picture,
    title: "EXECUTIVE CHAIR",
    description: "চেয়ার আমাদের দৈনন্দিন জীবনে অপরিহার্য আসবাবপত্র। এটি বসার জন্য বিশেষভাবে তৈরি করা হয়।",
    rating: "★★★★☆",
    sold: "2.1K+ bought in past month",
    price: "$499.99",
    oldPrice: "$699.99",
    deliveryDate: "Tue, Nov 15",
  },
  {
    id: 2,
    image: picture1,
    title: "OFFICE CHAIR",
    description: "অফিস চেয়ার আরামদায়ক এবং দীর্ঘ সময় বসে কাজ করার জন্য উপযোগী।",
    rating: "★★★★★",
    sold: "3K+ bought in past month",
    price: "$299.99",
    oldPrice: "$399.99",
    deliveryDate: "Wed, Nov 16",
  },
  {
    id: 3,
    image: picture2,
    title: "VISITOR MESH CHAIR",
    description: "আরামদায়ক মেশ চেয়ার যা বসার জন্য উপযুক্ত এবং স্টাইলিশ।",
    rating: "★★★★☆",
    sold: "1.9K+ bought in past month",
    price: "$626.84",
    oldPrice: "$799.99",
    deliveryDate: "Thu, Nov 17",
  },
];

const ProductCard = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="card shadow-lg p-3 h-100 d-flex flex-column">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-bold">{product.title}</h5>
                <p className="card-text text-muted flex-grow-1">{product.description}</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="text-warning me-2">{product.rating}</span>
                  <small className="text-muted">{product.sold}</small>
                </div>
                <h4 className="text-danger fw-bold">{product.price}</h4>
                <p className="text-muted">
                  <del>List: {product.oldPrice}</del>
                </p>
                <p className="text-success">Delivery {product.deliveryDate}</p>
                <p className="text-muted">Ships to Bangladesh</p>
                <button className="btn btn-primary w-100 mt-auto">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
