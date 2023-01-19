import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h1>404 Page Not Found!</h1>} />
        </Routes>
    </div>
  );
}

export default App;
