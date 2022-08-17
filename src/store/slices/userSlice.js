import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    activeUser: false,
  },
  reducers: {
    activeUser: (state, action) => {

      state.activeUser = { ...action.payload };
    },
    clearActiveUser: (state) => {

      state.activeUser = false;
    },
    loadUsers: (state, action) => {

      state.users = action.payload;
    },
    usersLogout: (state) => {

      // initialState
    },
    addUser: (state, action) => {

      state.users = [
        ...state.users,
        action.payload
      ];
    },
    updateUser: (state, action) => {

      state.users = state.users.map(
        e => (e._id === action.payload._id) ? action.payload : e
      );
    },
    deleteUser: (state) => {

      state.users = state.users.filter(
        e => (e._id !== state.activeUser._id)
      );
      state.activeUser = false;
    },

  },
})

export const {
  activeUser,
  clearActiveUser,
  loadUsers,
  usersLogout,
  addUser,
  updateUser,
  deleteUser, } = userSlice.actions;