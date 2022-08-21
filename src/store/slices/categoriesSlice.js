import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    loadCategories: (state, action) => {

      state.categories = action.payload;
    },
    addNewCategory: (state, action) => {

      state.categories = [
        ...state.categories,
        action.payload
      ];
    },
    updateCategory: (state, action) => {

      state.categories = state.categories.map(
        e => (e._id === action.payload._id) ? action.payload : e
      );
    },
    deleteCategory: (state, action) => {

      state.categories = state.categories.filter(
        e => (e._id !== action.payload._id) && e
      );
    },
    logoutCategories: (state) => {

      state.categories = [];
    }
  },
})

export const {
  loadCategories,
  addNewCategory,
  updateCategory,
  logoutCategories,
  deleteCategory, } = categoriesSlice.actions;