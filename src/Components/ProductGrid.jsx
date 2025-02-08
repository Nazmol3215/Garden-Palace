import React from "react";
import picture from "../Images/i4.png";
import picture1 from "../Images/i10.png";
import picture2 from "../Images/i12.png";
import picture3 from "../Images/i16.png";

const ProductGrid = ({scrollToOrder}) => {
  const handleClick = () => {
    scrollToOrder(); // এটা স্ক্রোল করবে OrderSubmit কম্পোনেন্টে
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* প্রোডাক্ট ১ */}
        <div style={cardStyle}>
          <img src={picture} alt="Wireless Headphones" style={imageStyle} />
          <h3>পায়েল সার</h3>
          <p style={descStyle}>High-quality wireless headphones with noise cancellation.</p>
          <p><strong>Rating:</strong> 4.5 ⭐</p>
          <p><strong>Price:</strong> $120</p>
          <button onClick={handleClick} style={buttonStyle}>Buy Now</button>
        </div>

        {/* প্রোডাক্ট ২ */}
        <div style={cardStyle}>
          <img src= {picture1} alt="Smartphone" style={imageStyle} />
          <h3> ভার্মি মিক্সড</h3>
          <p style={descStyle}>Latest smartphone with advanced features.</p>
          <p><strong>Rating:</strong> 4.8 ⭐</p>
          <p><strong>Price:</strong> $899</p>
          <button onClick={handleClick} style={buttonStyle}>Buy Now</button>
        </div>

        {/* প্রোডাক্ট ৩ */}
        <div style={cardStyle}>
          <img src= {picture2} alt="Laptop" style={imageStyle} />
          <h3>মেটাল রেক</h3>
          <p style={descStyle}>Lightweight laptop with powerful performance.</p>
          <p><strong>Rating:</strong> 4.7 ⭐</p>
          <p><strong>Price:</strong> $1500</p>
          <button onClick={handleClick} style={buttonStyle}>Buy Now</button>
        </div>

        {/* প্রোডাক্ট ৪ */}
        <div style={cardStyle}>
          <img src= {picture3} alt="Smartwatch" style={imageStyle} />
          <h3>ইনডোর প্লান্ট</h3>
          <p style={descStyle}>Feature-packed smartwatch with health tracking.</p>
          <p><strong>Rating:</strong> 4.3 ⭐</p>
          <p><strong>Price:</strong> $200</p>
          <button onClick={handleClick} style={buttonStyle}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
// স্টাইল অবজেক্ট
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  textAlign: "center",
  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "5px",
};

const descStyle = {
  fontSize: "14px",
  color: "gray",
};

const buttonStyle = {
  backgroundColor: "#3F9E53",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
};

export default ProductGrid;
