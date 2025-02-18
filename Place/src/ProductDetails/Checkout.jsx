import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Checkout Page</h2>
      <p>আপনার অর্ডার কনফার্ম করুন।</p>
      <button 
        onClick={() => navigate("/")} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Back to Product
      </button>
    </div>
  );
}

export default Checkout;
