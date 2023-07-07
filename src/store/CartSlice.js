import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addcart(state, action) {
            state.push(action.payload)
        },

        removecart(state, action) {
            state = state.filter(item => item.id !== action.payload)
        },
    }
})

export const {addcart, removecart} = cartSlice.actions;
export default cartSlice.reducer; 