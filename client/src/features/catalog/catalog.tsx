
import React, { useEffect, useState } from "react";

import { IProduct } from "../../app/models/products";
import ProductList from "./ProductList";

const Catalog: React.FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
  
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
