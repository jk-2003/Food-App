import React from "react";

const CartContext=React.createContext({
    items:[],
    quantity:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearItem:()=>{}
})

export default CartContext