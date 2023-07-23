import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import HeadContentBox from "./components/headcontentbox/headcontentbox";
import Header from "./components/header/Header";
import Mealslist from "./components/meals/mealslist";
import { useDispatch } from "react-redux";
import { mealslist } from "./components/Store/MealSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return async () => {
      async function fetchmeals() {
        const response = await fetch(
          "https://food-app-2ef2f-default-rtdb.firebaseio.com/meals.json"
        );
        const data = await response.json();
        // console.log(data)
        return data;
      }

      const mealsdata = await fetchmeals();
      dispatch(mealslist(mealsdata));
    };
  }, []);

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
        <Header openCart={openCart} />
        <HeadContentBox />
        <Mealslist />
        <Cart closeCart={closeCart} opencart={open} />
     
    </div>
  );
}

export default App;
