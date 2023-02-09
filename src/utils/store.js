import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;


//* create store
// - configurestore () -RTK

// provide my store app 
// <provider store = {store}> - import from react-redux

// slice 
// -RTK createSlice({
    // name: "",
    // initialState: "",
    // reducers: {
        // addItem: (state, action)=> {state=actione.payload}
   //  }   
    
 //   })
 // export const {addItems, removeItems} = cartSlice.actions; 
 // export default cartSlice.reducer;


 // put Slice into store
 // - {
    // reducer: {
        // cart: cartSlice,
        // user: userSlice,
   //  }   
    
    //}



