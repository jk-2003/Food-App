import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";
import CartContext from "../contex/CartContex";
export default function Header(props) {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // const numberOfCartItems = 0;
  return (
    <div className="header">
      <div className="navbar">
        <h2>JACKMEALS</h2>
        <button onClick={props.openCart} className="cart-btn">
          <span className="cart-icon">
            <AddShoppingCartIcon />
          </span>
          <span className="content">AddCart</span>
          <span className="bage">{numberOfCartItems}</span>
        </button>
      </div>
    </div>
  );
}
