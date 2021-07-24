import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [orderStatus, setOrderStatus] = useState("Place Order");
  const { cartItems, setCartitems } = useContext(Context);
  const cartItemElements = cartItems.map((item, inx) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = 4.99 * cartItems.length;
  function orderDisplay() {
    setOrderStatus("Loading...");
    setTimeout(() => {
      setOrderStatus("Order Placed!");
      setCartitems([]);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {totalCost.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={() => orderDisplay()}>{orderStatus}</button>
        ) : (
          <p>"You have no items in your cart."</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
