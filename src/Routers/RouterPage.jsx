import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "../AllPages/Pages";
import Product from "../ProductDetails/Product";
import Checkout from "../ProductDetails/Checkout";




function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
