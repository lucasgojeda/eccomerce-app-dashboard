import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: false
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
    setActiveCategory: (state, action) => {

      state.activeCategory = { ...action.payload };
    },
    clearActiveCategory: (state) => {

      state.activeCategory = false;
    },
    logoutCategories: (state) => {

      state.categories = [];
      state.activeCategory = false;
    }
  },
})

export const {
  loadCategories,
  addNewCategory,
  updateCategory,
  logoutCategories,
  setActiveCategory,
  clearActiveCategory,
  deleteCategory, } = categoriesSlice.actions;