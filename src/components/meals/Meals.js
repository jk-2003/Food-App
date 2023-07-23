import React, { useContext } from "react";
import MealsForm from "./MealsForm";
import "./mealslist.css";
import { useDispatch } from "react-redux";
import { addtocart } from "./../Store/Cartslice";
function Meals(props) {
  const dispatch = useDispatch();

  const addToCartHandler = (amount) => {
    console.log(typeof amount);
    if (amount === 0) {
      return;
    }
    dispatch(
      addtocart({
        id: props.id,
        name: props.name,
        quantity: amount,
        price: props.price,
      })
    );
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
