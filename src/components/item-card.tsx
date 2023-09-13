import React, { FunctionComponent, useContext } from "react";
import Product from "../models/product";
import "./item-card.css";
import { ShopContext } from "../context/shop-context";

type Props = {
  data: Product;
};

const ItemCart: FunctionComponent<Props> = (product) => {
  const data = product.data;
  const { cartItems, addToCart, RemoveFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
      <div className="card z-depth-1">
        <div className="cardimage">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="desc">
          <div>
            <strong>Product:</strong> {data.title}
          </div>
          <div>
            <strong>Brand:</strong> {data.brand}
          </div>
          <div>
            <strong>Category: </strong>
            {data.category}
          </div>
          <div>
            <strong>Desription: </strong>
            {data.description}
          </div>
          <div>
            <strong>Price: $</strong>
            {data.price}
          </div>
          <div>
            <strong>Stock: </strong>
            {data.stock}
          </div>
          <div>
            <strong>rating: </strong>
            {data.rating}/5
          </div>
          <div className="countHandler">
            <button
              onClick={() => {
                addToCart(data.id);
              }}
            >
              {" "}
              +{" "}
            </button>
            <input
              className="center"
              value={cartItems[data.id]}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), data.id)
              }
            />
            <button
              onClick={() => {
                RemoveFromCart(data.id);
              }}
            >
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
