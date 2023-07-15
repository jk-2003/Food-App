import React from "react";
import "./Cart.css";
function Cartitemlist(i) {
  return (
    <div className={"cart-item"}>
      <div className="item-name">
        <h2>{i.name}</h2>
        <p className={"price"}>Price: ${i.price}</p>
      </div>

      <div className={"summary"}>
        <span className={"amount"}>x {i.amount}</span>
      </div>

      <div className={"actions"}>
        <button onClick={i.onremove}>-</button>
        <button onClick={i.onadd}>+</button>
      </div>
    </div>
  );
}

export default Cartitemlist;
