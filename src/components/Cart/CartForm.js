import React, { useState, useRef } from "react";

import "./CartForm.css";
function CartForm(props) {
  const [meals, setmeals] = useState([]);
  const nameinput = useRef("");
  const streetinput = useRef("");
  const pincodeinput = useRef("");
  const cityinput = useRef("");

  const confirmHandler = (event) => {
    event.preventDefault();
    props.confirmorder({
      name: nameinput.current.value,
      street: streetinput.current.value,
      pincode: pincodeinput.current.value,
      city: cityinput.current.value,
    });
  };
  return (
    <form className={"form"} onSubmit={confirmHandler}>
      <div className={"control"}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameinput} />
      </div>
      <div className={"control"}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetinput} />
      </div>
      <div className={"control"}>
        <label htmlFor="postal">Pincode</label>
        <input type="text" id="postal" ref={pincodeinput} />
      </div>
      <div className={"control"}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityinput} />
      </div>
      <div className={"actions"}>
        <button type="button" onClick={props.closeCart}>
          Cancel
        </button>
        <button onClick={confirmHandler} className={"submit"}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default CartForm;
