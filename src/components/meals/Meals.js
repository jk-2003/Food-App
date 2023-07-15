import React, { useContext } from "react";
import MealsForm from "./MealsForm";
import "./mealslist.css";
import CartContext from "../contex/CartContex";
function Meals(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: Number(amount),
      price: props.price,
    });
  };

  return (
    <div key={props.id}>
      <div className="meals">
        <div className="items">
          <h3>{props.name}</h3>
          <p> {props.description}</p>
          <div>${props.price}</div>
        </div>
        <div>
          <MealsForm addamount={addToCartHandler} />
        </div>
      </div>
    </div>
  );
}

export default Meals;
