import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
  name: "meal",
  initialState: {
    items: [],
  },
  reducers: {
    mealslist: (state, action) => {
    //   state.items = state.items.push(action.payload);
      for (const key in action.payload) {
        state.items.push({
          id: key,
          name: action.payload[key].name,
          description: action.payload[key].description,
          price: action.payload[key].price,
        });
      }
    },
  },
});

export const { mealslist } = mealsSlice.actions;
export default mealsSlice;
