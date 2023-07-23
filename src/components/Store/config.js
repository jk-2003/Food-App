import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./MealSlice";
import cartslice from "./Cartslice";

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
    cart: cartslice.reducer,
  },
});

export default store;
