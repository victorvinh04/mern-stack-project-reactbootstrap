import React from "react";
import { CartPageComponent } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const reduxDispatch = useDispatch();

  return (
    <CartPageComponent
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      reduxDispatch={reduxDispatch}
      cartSubtotal={cartSubtotal}
      cartItems={cartItems}
    />
  );
};

export default CartPage;
