import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    activeProduct: false,
  },
  reducers: {
    setActiveProduct: (state, action) => {

      state.activeProduct = action.payload;
    },
    clearActiveProduct: (state) => {

      state.activeProduct = false;
    },
    clearFilteredProducts: (state) => {

      state.filteredProducts = [];
    },
    loadProducts: (state, action) => {

      state.products = [...action.payload];
    },
    loadFilteredProducts: (state, action) => {

      state.filteredProducts = action.payload;
    },
    addProduct: (state, action) => {

      state.products = [
        ...state.products,
        action.payload
      ];
    },
    updateProduct: (state, action) => {

      state.products = state.products.map(
        e => (e._id === action.payload._id) ? action.payload : e
      );
    },
    deleteProduct: (state, action) => {

      state.products = state.products.filter(
        e => (e._id !== action.payload._id)
      );
      state.activeProduct = false;
    },
    productsLogout: (state) => {

      state.products = [];
      state.activeProduct = false;
    },

  },
})

export const {
  setActiveProduct,
  clearActiveProduct,
  clearFilteredProducts,
  loadProducts,
  loadFilteredProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  productsLogout, } = productSlice.actions;