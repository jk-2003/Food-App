import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header(props) {
const totalQuantity=useSelector(state=>state.cart.totalquantity)

  return (
    <div className="header">
      <div className="navbar">
        <h2>JACKMEALS</h2>
        <button onClick={props.openCart} className="cart-btn">
          <span className="cart-icon">
            <AddShoppingCartIcon />
          </span>
          <span className="content">AddCart</span>
          <span className="bage">{totalQuantity}</span>
        </button>
      </div>
    </div>
  );
}
