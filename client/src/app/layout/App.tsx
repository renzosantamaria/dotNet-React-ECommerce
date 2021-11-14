import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/catalog';
import { IProduct } from '../models/products';


const App: React.FC = () => {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const addProducts = () => {
    setProducts( prev => [...prev,
      {
        id: (prev.length - 1),
        name: 'product ' + (prev.length + 1),
        description: "description ..." ,
        price: (prev.length * 100) + 100,
        pictureUrl: "",
        type: "",
        brand: "",
        quantityInStock: 1

      }])
  }

  return(
    <div className="app" >
      <Typography variant="h1" >ReStore</Typography>
      <Catalog products={products} addProducts={addProducts} />
    </div>
  )
}

export default App;
