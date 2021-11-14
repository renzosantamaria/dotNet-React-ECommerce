import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

import { IProduct } from "../../app/models/products";

interface IProps {
  products: IProduct[];
  addProducts: () => void;
}

const Catalog: React.FC<IProps> = ({ products, addProducts }) => {
  return (
    <>
      <h1>Catalog</h1>
      <List>
        {products.map((product) => {
          return (
            <ListItem key={product.id}>
              <ListItemAvatar>
                  <Avatar src={product.pictureUrl}></Avatar>
              </ListItemAvatar>
              <ListItemText> {product.name} - {product.price} </ListItemText>
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" onClick={addProducts} >Add product</Button>
    </>
  );
};

export default Catalog;
