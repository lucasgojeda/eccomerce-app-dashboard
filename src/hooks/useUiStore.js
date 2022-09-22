import { useDispatch, useSelector } from 'react-redux';

import {
    uiLogout,
    uiOpenRecordModal,
    uiCloseRecordModal,
    uiOpenCategoriesModal,
    uiCloseCategoriesModal,
    uiOpenProductModal,
    uiCloseProductModal,
    uiOpenProductModalEdit,
    uiCloseProductModalEdit,
    uiOpenUserModalEdit,
    uiCloseUserModalEdit,
    uiOpenUserModalAdd,
    uiCloseUserModalAdd,
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
    uiStartTableLoading,
    uiStopTableLoading,
} from '../store/slices/uiSlice';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        modalProductAdd,
        modalProductEdit,
        addProductProgress,
        modalUserAdd,
        modalUserEdit,
        successAlert,
        errorAlert,
        progressBackdrop,
        dialogDelete,
        dialogFields,
        recordModal,
        categoriesModal,
        tableLoading,
    } = useSelector(state => state.ui);


    const startUiLogout = () => {

        dispatch(uiLogout());
    };

    /* RECORDS */

    const startUiOpenRecordModal = () => {

        dispatch(uiOpenRecordModal());
    };

    const startUiCloseRecordModal = () => {

        dispatch(uiCloseRecordModal());
    };
    /* CATEGORIES */

    const startUiOpenCategoriesModal = () => {

        dispatch(uiOpenCategoriesModal());
    };

    const startUiCloseCategoriesModal = () => {

        dispatch(uiCloseCategoriesModal());
    };

    /* PRODUCTS */

    const startUiOpenProductModal = () => {

        dispatch(uiOpenProductModal());
    };

    const startUiCloseProductModal = () => {

        dispatch(uiCloseProductModal());
    };

    const startUiOpenProductModalEdit = () => {

        dispatch(uiOpenProductModalEdit());
    };

    const startUiCloseProductModalEdit = () => {

        dispatch(uiCloseProductModalEdit());
    };


    /* USERS */

    const startUiOpenUserModalEdit = () => {

        dispatch(uiOpenUserModalEdit());
    };

    const startUiCloseUserModalEdit = () => {

        dispatch(uiCloseUserModalEdit());
    };

    const startUiOpenUserModalAdd = () => {

        dispatch(uiOpenUserModalAdd());
    };

    const startUiCloseUserModalAdd = () => {

        dispatch(uiCloseUserModalAdd());
    };

    /* ALERTS */

    const startUiOpenSuccessAlert = (title) => {

        dispatch(uiOpenSuccessAlert(title));

    };

    const startUiCloseSuccessAlert = () => {

        dispatch(uiCloseSuccessAlert());
    };

    const startUiOpenErrorAlert = (title) => {

        dispatch(uiOpenErrorAlert(title));

    };

    const startUiCloseErrorAlert = () => {

        dispatch(uiCloseErrorAlert());
    };

    const startUiOpenProgressBackdrop = () => {

        dispatch(uiOpenProgressBackdrop());
    };

    const startUiCloseProgressBackdrop = () => {

        dispatch(uiCloseProgressBackdrop());
    };

    const startUiOpenDialogDelete = () => {

        dispatch(uiOpenDialogDelete());
    };

    const startUiCloseDialogDelete = () => {

        dispatch(uiCloseDialogDelete());
    };

    const startUiOpenDialogFields = (errors) => {

        dispatch(uiOpenDialogFields(errors));
    };

    const startUiCloseDialogFields = () => {

        dispatch(uiCloseDialogFields());
    };

    const startUiStartTableLoading = () => {

        dispatch(uiStartTableLoading());
    };

    const startUiStopTableLoading = () => {

        dispatch(uiStopTableLoading());
    };



    return {
        //* Propiedades
        modalProductAdd,
        modalProductEdit,
        addProductProgress,
        modalUserAdd,
        modalUserEdit,
        successAlert,
        errorAlert,
        progressBackdrop,
        dialogDelete,
        dialogFields,
        recordModal,
        categoriesModal,
        tableLoading,

        //* Métodos
        startUiLogout,
        startUiOpenRecordModal,
        startUiCloseRecordModal,
        startUiOpenCategoriesModal,
        startUiCloseCategoriesModal,
        startUiOpenProductModal,
        startUiCloseProductModal,
        startUiOpenProductModalEdit,
        startUiCloseProductModalEdit,
        startUiOpenUserModalEdit,
        startUiCloseUserModalEdit,
        startUiOpenUserModalAdd,
        startUiCloseUserModalAdd,
        startUiOpenSuccessAlert,
        startUiCloseSuccessAlert,
        startUiOpenErrorAlert,
        startUiCloseErrorAlert,
        startUiOpenProgressBackdrop,
        startUiCloseProgressBackdrop,
        startUiOpenDialogDelete,
        startUiCloseDialogDelete,
        startUiOpenDialogFields,
        startUiCloseDialogFields,
        startUiStartTableLoading,
        startUiStopTableLoading,
    }
}
