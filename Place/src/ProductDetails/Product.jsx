import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Product Page</h2>
      <p>আপনার পছন্দের প্রোডাক্টটি কিনতে Buy Now বাটনে ক্লিক করুন।</p>
      <button 
        onClick={() => navigate("/checkout")} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default Product;
