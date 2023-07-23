import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalquantity: 0,
    totalprice: 0,
  },
  reducers: {
    addtocart: (state, action) => {
      const newitem = action.payload;
      console.log(newitem);
      const olditem = state.items.find((item) => item.id === newitem.id);
      state.totalquantity += newitem.quantity;
      state.totalprice += newitem.price * newitem.quantity;
      if (!olditem) {
        state.items.push({
          id: newitem.id,
          name: newitem.name,
          quantity: newitem.quantity,
          price: newitem.price,
        });
      } else {
        olditem.quantity+=newitem.quantity;
      }
      let item = state.items;
      console.log(item, state.totalprice, state.totalquantity);
    },
    removefromcart: (state, action) => {
      const id = action.payload;
      console.log(id);

      const olditem = state.items.find((item) => item.id === id);
      state.totalquantity--;
      if (olditem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        olditem.quantity--;
      }
      state.totalprice -= olditem.price;
    },
    clearcart: (state) => {
      state.items = [];
      state.totalquantity = 0;
      state.totalprice = 0;
    },
  },
});

export const { addtocart, removefromcart,clearcart } = cartslice.actions;
export default cartslice;
