import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import HeadContentBox from "./components/headcontentbox/headcontentbox";
import Header from "./components/header/Header";
import Mealslist from "./components/meals/mealslist";
import CartProvidedContext from "./components/contex/CartProvidedContex";

function App() {
  const [open, setopen] = useState(false);

  function openCart() {
    setopen(true);
  }

  function closeCart() {
    setopen(false);
  }
  function newapp() {
    console.log("hello");
  }
  return (
    <div className="App">
      <CartProvidedContext>
        <Header openCart={openCart} />
        <HeadContentBox />
        <Mealslist />
        <Cart closeCart={closeCart} opencart={open} />
      </CartProvidedContext>
    </div>
  );
}

export default App;
