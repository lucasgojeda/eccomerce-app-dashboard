import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    updateCartProduct: (state, action) => {

      state.cart = [
        ...state.cart,
        action.payload
      ];
    },
    deleteCartProduct: (state, action) => {

      state.cart = state.cart.filter(
        e => (e._id !== action.payload._id) && e
      );
    },
    loadCart: (state, action) => {

      state.cart = action.payload;
    },
    cartLogout: (state) => {

      state.cart = [];
    },

  },
})

export const {
  updateCartProduct,
  deleteCartProduct,
  loadCart,
  cartLogout, } = cartSlice.actions;