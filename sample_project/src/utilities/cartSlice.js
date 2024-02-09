import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItems : []
    },
    reducers :{
        addItem : (state, action)=>{state.cartItems.push(action.payload)},
        clearCart : (state)=>{state.cartItems=[]}
    }
}
)
 
// console.log("cartSlice", cartSlice);
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



