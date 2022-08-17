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

      state.sales_user = sortArray((action.payload.user._id === state.notifications[0].user) && state.sales_user.map(
        e => (e._id === action.payload._id) ? action.payload : e
      ), {
        by: 'date_sended',
        order: 'desc'
      });
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

      // initialState;
    },

  },
})

export const {
  loadNotifications,
  addSale_user,
  addNotification,
  updateNotification,
  notificationsLogout, } = notificationsSlice.actions;