import React, { useState, useContext } from "react";
import ReactModal from "react-modal";
import "./Cart.css";
import CartContext from "../contex/CartContex";
import Cartitemlist from "./cartitemlist";
import CartForm from "./CartForm";
import { addtocart,removefromcart,clearcart } from "../Store/Cartslice";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const [cartform, setcartform] = useState(false);
  const [cartbtn, setcartbtn] = useState(true);
  const [submitting, setsubmitting] = useState(false);
  const [submitted, setsubmitted] = useState(false);

  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalprice);
  console.log(cartitems);

  // const cxt = useContext(CartContext);

  const onadd = (i) => {
dispatch(addtocart({...i,quantity:1}))
    console.log(i);
  };
  const onremove = (id) => {
    dispatch(removefromcart(id))
    console.log(id)
  };

  function CartFormHandler() {
    setcartform(true);
    setcartbtn(false);
  }
  function closeform() {
    setcartform(false);
    setsubmitted(false);
    props.closeCart();
  }

  async function confirmorder(i) {
    console.log(i);
    setsubmitting(true);
    const response = await fetch(
      "https://food-app-2ef2f-default-rtdb.firebaseio.com/Orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: i,
          order: cartitems,
        }),
      }
    );
    setsubmitting(false);
    setsubmitted(true);
    dispatch(clearcart())
  }

  const cartbutton = (
    <div className={"actions"}>
      {<button onClick={closeform} className={"button--alt"}>
        Close
      </button>}
      <button onClick={CartFormHandler} className={"button"}>
        Order
      </button>
    </div>
  );
  const cart = cartitems.map((i) => {
    {
      return (
        <Cartitemlist
        key={i.id}
          name={i.name}
          id={i.id}
          price={i.price}
          amount={i.quantity}
          onadd={onadd.bind(null, i)}
          onremove={onremove.bind(null, i.id)}
        />
      );
    }
  });
  const modalcontent = (
    <React.Fragment>
      <div className="cart-items">
        {cart}
        {cartform && (
          <CartForm confirmorder={confirmorder} closeCart={closeform} />
        )}
      </div>
      <div className={"total"}>
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
      </div>
      {!cartform && cartbutton}
    </React.Fragment>
  );

  const submittingcontent = <p className="pending">sending order data......</p>;
  const submittedcontent = (
    <div className="success">
      <p>order submitted successfully. </p>
      <div className="actions">
        <button onClick={closeform} className={"button--alt"}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <ReactModal
      className={"modal"}
      isOpen={props.opencart}
      onRequestClose={closeform}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      {!submitting && !submitted && modalcontent}
      {submitting && submittingcontent}
      {!submitting && submitted && submittedcontent}
    </ReactModal>
  );
};

export default Cart;
