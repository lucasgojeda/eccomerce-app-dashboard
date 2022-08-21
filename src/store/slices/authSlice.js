import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    checking: true,
    uid: null,
    name: null,
    role: null,
  },
  reducers: {
    authLogin: (state, action) => {

      state.checking = false;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    authCheckingFinish: (state) => {

      state.checking = false;
    },
    authLogout: (state) => {

      state.uid = null;
      state.name = null;
      state.role = null;
      state.checking = false;
    },

  },
})

export const {
  authLogin,
  authCheckingFinish,
  authLogout } = authSlice.actions;