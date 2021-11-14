import { Grid } from "@mui/material";
import React from "react"
import { IProduct } from "../../app/models/products";
import ProductCard from "./ProductCard";

interface IProps {
    products: IProduct[];
}

const ProductList: React.FC<IProps> = ({products}) => {
    return (
        <Grid container spacing={4} >
            {products.map((product) => 
                <Grid key={product.id} item xs={3}>
                    <ProductCard key={product.id} product={product} />
                </Grid>
            )}
      </Grid>
    )
}

export default ProductList