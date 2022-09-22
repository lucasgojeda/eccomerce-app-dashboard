import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modalProductAdd: false,
    modalProductEdit: false,
    addProductProgress: false,
    modalUserAdd: false,
    modalUserEdit: false,
    successAlert: {
      status: false,
      title: ''
    },
    errorAlert: {
      status: false,
      title: ''
    },
    progressBackdrop: { status: false },
    dialogDelete: false,
    dialogFields: { status: false },
    recordModal: false,
    categoriesModal: false
  },
  reducers: {
    uiLogout: (state) => {

      state.modalProductAdd = false;
      state.modalProductEdit = false;
      state.addProductProgress = false;
      state.modalUserAdd = false;
      state.modalUserEdit = false;
      state.successAlert = {
        status: false,
        title: ''
      };
      state.errorAlert = {
        status: false,
        title: ''
      };
      state.progressBackdrop = { status: false };
      state.dialogDelete = false;
      state.dialogFields = { status: false };
      state.recordModal = false;
      state.categoriesModal = false;
      state.tableLoading = false;
    },

    /* TABLES */

    uiStartTableLoading: (state) => {

      state.tableLoading = true;
    },
    uiStopTableLoading: (state) => {

      state.tableLoading = false;
    },

    /* ALERTS */

    uiOpenSuccessAlert: (state, action) => {

      state.successAlert = {
        status: true,
        title: action.payload
      };
    },
    uiCloseSuccessAlert: (state) => {

      state.successAlert = { status: false };
    },
    uiOpenErrorAlert: (state, action) => {

      state.errorAlert = {
        status: true,
        title: action.payload
      };
    },
    uiCloseErrorAlert: (state) => {

      state.errorAlert = { status: false };
    },
    uiOpenProgressBackdrop: (state) => {

      state.progressBackdrop = { status: true };
    },
    uiCloseProgressBackdrop: (state) => {

      state.progressBackdrop = { status: false };
    },
    uiOpenDialogDelete: (state) => {

      state.dialogDelete = true;
    },
    uiCloseDialogDelete: (state) => {

      state.dialogDelete = false;
    },
    uiOpenDialogFields: (state, action) => {

      state.dialogFields = {
        status: true,
        errors: action.payload
      };
    },
    uiCloseDialogFields: (state) => {

      state.dialogFields = {
        ...state.dialogFields,
        status: false
      };
    },

    /* PRODUCTS */

    uiOpenProductModal: (state) => {

      state.modalProductAdd = true;
    },
    uiCloseProductModal: (state) => {

      state.modalProductAdd = false;
    },
    uiOpenProductModalEdit: (state) => {

      state.modalProductEdit = true;
    },
    uiCloseProductModalEdit: (state) => {

      state.modalProductEdit = false;
    },

    /* USERS */

    uiOpenUserModalEdit: (state) => {

      state.modalUserEdit = true;
    },
    uiCloseUserModalEdit: (state) => {

      state.modalUserEdit = false;
    },
    uiOpenUserModalAdd: (state) => {

      state.modalUserAdd = true;
    },
    uiCloseUserModalAdd: (state) => {

      state.modalUserAdd = false;
    },

    /* RECORDS */

    uiOpenRecordModal: (state) => {

      state.recordModal = true;
    },
    uiCloseRecordModal: (state) => {

      state.recordModal = false;
    },

    /* CATEGORIES */

    uiOpenCategoriesModal: (state) => {

      state.categoriesModal = true;
    },
    uiCloseCategoriesModal: (state) => {

      state.categoriesModal = false;
    },

  },
})

export const {

  uiLogout,

  /* TABLES */
  uiStartTableLoading,
  uiStopTableLoading,

  /*ALERTS */
  uiOpenSuccessAlert,
  uiCloseSuccessAlert,
  uiOpenErrorAlert,
  uiCloseErrorAlert,
  uiOpenProgressBackdrop,
  uiCloseProgressBackdrop,
  uiOpenDialogDelete,
  uiCloseDialogDelete,
  uiOpenDialogFields,
  uiCloseDialogFields,

  /* PRODUCTS */

  uiOpenProductModal,
  uiCloseProductModal,
  uiOpenProductModalEdit,
  uiCloseProductModalEdit,

  /* USERS */

  uiOpenUserModalEdit,
  uiCloseUserModalEdit,
  uiOpenUserModalAdd,
  uiCloseUserModalAdd,

  /* RECORDS */

  uiOpenRecordModal,
  uiCloseRecordModal,

  /* CATEGORIES */

  uiOpenCategoriesModal,
  uiCloseCategoriesModal,

} = uiSlice.actions;