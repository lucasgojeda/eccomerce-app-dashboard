import { createSlice } from '@reduxjs/toolkit';

export const recordsSlice = createSlice({
  name: 'records',
  initialState: {
    records: [],
    activeRecord: false
  },
  reducers: {
    activeRecord: (state, action) => {

      state.activeRecord = { ...action.payload };
    },
    clearActiveRecord: (state) => {

      state.activeRecord = false;
    },
    addNewRecord: (state, action) => {

      state.records = [
        ...state.records,
        action.payload
      ];
    },
    loadRecords: (state, action) => {

      state.records = action.payload;
    },
    recordsLogout: (state) => {

      // initialState
    },

  },
})

export const {
  activeRecord,
  clearActiveRecord,
  addNewRecord,
  loadRecords,
  recordsLogout, } = recordsSlice.actions;