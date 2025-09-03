import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((p)=>p.name === action.payload.name);
      if(existingItem){
        existingItem.quantity += 1;
      }
      else{
        state.items.push(...state, {name: action.payload.name, image: action.payload.image, description: action.payload.description, cost: action.payload.cost, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((p)=>p.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const existingItem = state.items.find((p)=>p.name === action.payload.name);
      existingItem.quantity += 1;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
