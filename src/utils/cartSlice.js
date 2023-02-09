import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        items: ["Bananas", "Apples"],
        
    },
    reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.items.pop();

    },
    claerCart: (state) => {
        state.items = [];
    },
},
});
export const {addItem, removeItem, claerCart} = cartSlice.actions;
export default cartSlice.reducer;