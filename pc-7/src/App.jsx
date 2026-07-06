import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
