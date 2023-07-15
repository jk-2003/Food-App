import React, { useState } from "react";
import "./MealsForm.css";

function MealsForm(props) {
  let [amount, setamount] = useState(0);

  function amounthandeler(e) {
    setamount((amount = e.target.value));
  }
  function submitCarthandeler(e) {
    e.preventDefault();
    props.addamount(amount);
    setamount("");
  }

  return (
    <div>
      <div className="item-required">
        <form onSubmit={submitCarthandeler} className="amount">
          <label>Quantity :</label>
          <input
            value={amount}
            onChange={amounthandeler}
            type="number"
            className="price"
          />
        </form>
        <button onClick={submitCarthandeler} className="meal-btn">
          + Add Cart
        </button>
      </div>
    </div>
  );
}

export default MealsForm;
