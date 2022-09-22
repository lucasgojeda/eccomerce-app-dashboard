import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { addProduct } from "../store/slices/productSlice";
import { addNewRecord } from "../store/slices/recordsSlice";
import { addUser } from "../store/slices/userSlice";

import {
    clearActiveBinProduct,
    clearActiveBinUser,
    deleteBinProduct,
    deleteBinUser,
    loadBinProducts,
    loadBinUsers,
    setActiveBinProduct,
    setActiveBinUser
} from "../store/slices/binSlice";

import {
    addOneDashboardProducts,
    addOneDashboardRecords,
    addOneDashboardUsers,
    subtractOneDashboardBinProducts,
    subtractOneDashboardBinUsers
} from "../store/slices/staticsSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert,
    uiStartTableLoading,
    uiStopTableLoading
} from "../store/slices/uiSlice";


export const useBinStore = () => {

    const dispatch = useDispatch();
    const {
        binProducts,
        activeBinProduct,
        binUsers,
        activeBinUser
    } = useSelector(state => state.bin);


    /* PRODUCTS */

    const startLoadBinProducts = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            dispatch(uiStartTableLoading());

            const { data: { msg, results } } = await dashboardApi.get(`bin/products/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);

            if (msg === 'OK') {

                console.log('Filtered bin products', results);

                const filteredBinProducts = results;

                dispatch(loadBinProducts(filteredBinProducts));

                window.scroll(0, 0);
                dispatch(uiStopTableLoading());

            } else {
                dispatch(uiStopTableLoading());
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiStopTableLoading());
            console.log(error);
        }
    }

    const productBinStartEnable = async () => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { record, msg } } = await dashboardApi.put(`bin/products/${activeBinProduct._id}`, {});

            console.log({ record, msg });


            if (msg === 'OK') {

                dispatch(clearActiveBinProduct());

                dispatch(uiCloseProgressBackdrop());


                dispatch(deleteBinProduct(activeBinProduct));
                dispatch(addProduct(activeBinProduct))

                dispatch(addOneDashboardProducts());
                dispatch(subtractOneDashboardBinProducts());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());



                dispatch(uiOpenSuccessAlert('El producto fue habilitado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar habilitar el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar habilitar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const productBinStartDeleted = async (product) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { record, msg } } = await dashboardApi.delete(`bin/products/${product._id}`, {});

            console.log({ record, msg });


            if (msg === "OK") {

                dispatch(clearActiveBinProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinProduct(product));
                dispatch(subtractOneDashboardBinProducts());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue removido de forma permanente exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const startClearActiveBinProduct = () => {

        dispatch(clearActiveBinProduct());
    }

    const startSetActiveBinProduct = (product) => {


        dispatch(setActiveBinProduct(product));
    }

    /* USERS */

    const startLoadBinUsers = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            dispatch(uiStartTableLoading());
            const { data: { msg, results } } = await dashboardApi.get(`bin/users/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);


            if (msg === 'OK') {

                console.log('Filtered users', results);

                const filteredUsers = results;

                dispatch(loadBinUsers(filteredUsers));

                window.scroll(0, 0);
                dispatch(uiStopTableLoading());

            } else {
                dispatch(uiStopTableLoading());
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiStopTableLoading());
            console.log(error);
        }
    }

    const userBinStartEnable = async () => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, record } } = await dashboardApi.put(`bin/users/${activeBinUser._id}`, {});

            console.log({ msg, record });


            if (msg === 'OK') {

                dispatch(clearActiveBinUser());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinUser(activeBinUser));
                dispatch(addUser(activeBinUser));

                dispatch(addOneDashboardUsers());
                dispatch(subtractOneDashboardBinUsers());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue habilitado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar habilitar el usuario! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar habilitar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }

    const userBinStartDeleted = async (user) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, record } } = await dashboardApi.delete(`bin/users/${user._id}`, {});

            console.log({ msg, record });


            if (msg === "OK") {

                dispatch(clearActiveBinUser());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinUser(user));
                dispatch(subtractOneDashboardBinUsers());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue removido de forma permanente exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el usuario! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }

    const startClearActiveBinUser = () => {

        dispatch(clearActiveBinUser());
    }

    const startSetActiveBinUser = (user) => {

        dispatch(setActiveBinUser(user));
    }


    return {
        //* Propiedades
        binProducts,
        activeBinProduct,
        binUsers,
        activeBinUser,

        //* Métodos
        startLoadBinProducts,
        productBinStartEnable,
        productBinStartDeleted,
        startLoadBinUsers,
        userBinStartEnable,
        userBinStartDeleted,
        startClearActiveBinProduct,
        startClearActiveBinUser,
        startSetActiveBinProduct,
        startSetActiveBinUser,
    }
}
