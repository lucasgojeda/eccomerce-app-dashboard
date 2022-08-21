import { createSlice } from '@reduxjs/toolkit';

export const staticsSlice = createSlice({
  name: 'statics',
  initialState: {
    dashboardProducts: 0,
    dashboardBinProducts: 0,
    dashboardUsers: 0,
    dashboardBinUsers: 0,
    dashboardSales: 0,
    dashboardRecords: 0,
  },
  reducers: {
    loadDashboardProducts: (state, action) => {

      state.dashboardProducts = action.payload;
    },
    loadDashboardBinProducts: (state, action) => {

      state.dashboardBinProducts = action.payload;
    },
    loadDashboardUsers: (state, action) => {

      state.dashboardUsers = action.payload;
    },
    loadDashboardBinUsers: (state, action) => {

      state.dashboardBinUsers = action.payload;
    },
    loadDashboardSales: (state, action) => {

      state.dashboardSales = action.payload;
    },
    loadDashboardRecords: (state, action) => {

      state.dashboardRecords = action.payload;
    },
    addOneDashboardProducts: (state) => {

      state.dashboardProducts = (state.dashboardProducts + 1);
    },
    subtractOneDashboardProducts: (state) => {

      state.dashboardProducts = (state.dashboardProducts - 1);
    },
    addOneDashboardBinProducts: (state) => {

      state.dashboardBinProducts = (state.dashboardBinProducts + 1);
    },
    subtractOneDashboardBinProducts: (state) => {

      state.dashboardBinProducts = (state.dashboardBinProducts - 1);
    },
    addOneDashboardUsers: (state) => {

      state.dashboardUsers = (state.dashboardUsers + 1);
    },
    subtractOneDashboardUsers: (state) => {

      state.dashboardUsers = (state.dashboardUsers - 1);
    },
    addOneDashboardBinUsers: (state) => {

      state.dashboardBinUsers = (state.dashboardBinUsers + 1);
    },
    subtractOneDashboardBinUsers: (state) => {

      state.dashboardBinUsers = (state.dashboardBinUsers - 1);
    },
    addOneDashboardSales: (state) => {

      state.dashboardSales = (state.dashboardSales + 1);
    },
    subtractOneDashboardSales: (state) => {

      state.dashboardSales = (state.dashboardSales - 1);
    },
    addOneDashboardRecords: (state) => {

      state.dashboardRecords = (state.dashboardRecords + 1);
    },
    subtractOneDashboardRecords: (state) => {

      state.dashboardRecords = (state.dashboardRecords - 1);
    },
    staticsLogout: (state) => {

      state.dashboardProducts = 0;
      state.dashboardBinProducts = 0;
      state.dashboardUsers = 0;
      state.dashboardBinUsers = 0;
      state.dashboardSales = 0;
      state.dashboardRecords = 0;
    },

  },
})

export const {
  loadDashboardProducts,
  loadDashboardBinProducts,
  loadDashboardUsers,
  loadDashboardBinUsers,
  loadDashboardSales,
  loadDashboardRecords,
  addOneDashboardProducts,
  subtractOneDashboardProducts,
  addOneDashboardBinProducts,
  subtractOneDashboardBinProducts,
  addOneDashboardUsers,
  subtractOneDashboardUsers,
  addOneDashboardBinUsers,
  subtractOneDashboardBinUsers,
  addOneDashboardSales,
  subtractOneDashboardSales,
  addOneDashboardRecords,
  subtractOneDashboardRecords,
  staticsLogout, } = staticsSlice.actions;