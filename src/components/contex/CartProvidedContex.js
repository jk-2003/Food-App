import React, { useReducer, useState } from "react";
import CartContext from "./CartContex";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(state);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    console.log();
    const updateitemindex = state.items.findIndex(
      (item) => item.id == action.item.id
    );
    console.log(updateitemindex);
    const existingitem = state.items[updateitemindex];
    let updatedItems;
    if (existingitem) {
      const updateitem = {
        ...existingitem,
        amount: existingitem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[updateitemindex] = updateitem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const updateitemindex = state.items.findIndex(
      (item) => item.id == action.id
    );

    const updateitem = state.items[updateitemindex];
    const updatedTotalAmount = state.totalAmount - updateitem.price;
    let updateitems;
    if (updateitem.amount === 1) {
      updateitems = state.items.filter((item) => item.id !== action.id);
      console.log(updateitems);
    } else {
      const updateItem = { ...updateitem, amount: updateitem.amount - 1 };
      updateitems = [...state.items];
      updateitems[updateitemindex] = updateItem;
    }
    return {
      items: updateitems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

function CartProvidedContext(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearItemHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItem: clearItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvidedContext;
