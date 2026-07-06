import React, { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../api/productApi.js';

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);

  let setData = async () => {
    setProduct(await getAllProducts());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={product}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
