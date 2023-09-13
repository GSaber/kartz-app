import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import PRODUCTS from "../models/mock-product";
import { ShopContext } from "../context/shop-context";
import ItemCart from "../components/item-card";
import { Link } from "react-router-dom";

const Cart: FunctionComponent = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalamount = getTotalAmount();
  return (
    <>
      <div className="container">
        {cartItems.length ? (
          <h1 className="center">Your cart is empty</h1>
        ) : (
          <h1 className="center">Your cart</h1>
        )}
        <div className="cartlist">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <ItemCart key={product.id} data={product} />;
            }
          })}
        </div>
        <div className="checkout center">
          {totalamount > 0 && (
            <p>
              <strong> Subtotal:</strong> ${totalamount}
            </p>
          )}

          <button className="btn">
            <Link className="btn-link" to="/">
              Continue Shopping
            </Link>
          </button>
          <button className="btn">Checkout</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
