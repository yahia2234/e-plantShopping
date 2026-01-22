import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items array
  },
  reducers: {
    // Add a plant to the cart
    addItem: (state, action) => {
      const plant = action.payload;

      // Check if plant already exists in cart (by name)
      const existingItem = state.items.find(
        (item) => item.name === plant.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // Remove a plant from the cart (by name)
    removeItem: (state, action) => {
      const plantName = action.payload;

      state.items = state.items.filter(
        (item) => item.name !== plantName
      );
    },

    // Update quantity of a plant in the cart
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
