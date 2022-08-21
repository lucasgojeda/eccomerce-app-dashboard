import { createSlice } from '@reduxjs/toolkit';

export const binSlice = createSlice({
  name: 'bin',
  initialState: {
    binProducts: [],
    activeBinProduct: false,
    binUsers: [],
    activeBinUser: false,
  },
  reducers: {

    /* PRODUCTS */

    addBinProduct: (state, action) => {

      state.binProducts = [
        ...state.binProducts,
        action.payload
      ];
    },
    deleteBinProduct: (state, action) => {

      state.binProducts = state.binProducts.filter(
        e => e._id !== action.payload._id
      );
    },
    setActiveBinProduct: (state, action) => {

      state.activeBinProduct = { ...action.payload };
    },
    clearActiveBinProduct: (state) => {

      state.activeBinProduct = false;
    },
    loadBinProducts: (state, action) => {

      state.binProducts = action.payload;
    },
    productsBinLogout: (state) => {

      state.activeBinProduct = false;
      state.binProducts = [];
    },

    /* USERS */

    addBinUser: (state, action) => {

      state.binUsers = [
        ...state.binUsers,
        action.payload
      ];
    },
    deleteBinUser: (state, action) => {

      state.binUsers = state.binUsers.filter(
        e => e._id !== action.payload._id
      );
    },
    setActiveBinUser: (state, action) => {

      state.activeBinUser = { ...action.payload };
    },
    clearActiveBinUser: (state) => {

      state.activeBinUser = false;
    },
    loadBinUsers: (state, action) => {

      state.binUsers = action.payload;
    },
    usersBinLogout: (state) => {

      state.activeBinUser = false;
      state.binUsers = [];
      state.activeBinProduct = false;
      state.binProducts = [];
    },

  },
})

export const {

  /* PRODUCTS */

  addBinProduct,
  deleteBinProduct,
  setActiveBinProduct,
  clearActiveBinProduct,
  loadBinProducts,
  productsBinLogout,

  /* USERS */

  addBinUser,
  deleteBinUser,
  setActiveBinUser,
  clearActiveBinUser,
  loadBinUsers,
  usersBinLogout, } = binSlice.actions;