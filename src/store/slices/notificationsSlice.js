import { createSlice } from '@reduxjs/toolkit';


export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    sales_user: [],
  },
  reducers: {
    loadNotifications: (state, action) => {

      state.notifications = action.payload.notifications;
      state.sales_user = action.payload.sales_user;
    },
    addSale_user: (state, action) => {

      state.sales_user = (action.payload.user._id === state.notifications[0].user) && state.sales_user.map(
        e => (e._id === action.payload._id) ? action.payload : e)

      state.sales_user.sort((a, b) => a.date_sended - b.date_sended);
    },
    addNotification: (state, action) => {

      state.notifications = [
        ...state.notifications,
        action.payload
      ];
    },
    updateNotification: (state, action) => {

      state.notifications = state.notifications.map(
        e => (e._id === action.payload._id) ? action.payload : e
      );
    },
    notificationsLogout: (state) => {

      state.notifications = [];
      state.sales_user = [];
    },

  },
})

export const {
  loadNotifications,
  addSale_user,
  addNotification,
  updateNotification,
  notificationsLogout, } = notificationsSlice.actions;