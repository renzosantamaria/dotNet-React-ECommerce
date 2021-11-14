import {
    Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { IProduct } from "../../app/models/products";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
                {product.name.charAt(0).toUpperCase()}
            </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
            sx: {fontWeight: 'bold', color: 'primary.main'}
        }}
      />
      <CardMedia
        component="img"
        sx={{ height: 140, backgroundSize: 'contained', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="text.secondary" variant="h5">
          ${(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / { product.type } 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
