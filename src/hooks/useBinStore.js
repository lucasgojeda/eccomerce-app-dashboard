import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken } from "../helpers/fetch"

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
    uiOpenSuccessAlert
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

            const resp = await fetchConToken(`bin/products/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered bin products', body);

                const filteredBinProducts = body.results;

                console.log(filteredBinProducts)

                dispatch(loadBinProducts(filteredBinProducts));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const productBinStartEnable = async (product) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`bin/products/${product._id}`, {}, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(clearActiveBinProduct());

                dispatch(uiCloseProgressBackdrop());


                dispatch(deleteBinProduct(product));
                dispatch(addProduct(product))

                dispatch(addOneDashboardProducts());
                dispatch(subtractOneDashboardBinProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());



                dispatch(uiOpenSuccessAlert('El producto fue habilitado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar habilitar el producto! Hable con el administrador'));
                console.log(body.msg);
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

            const resp = await fetchConToken(`bin/products/${product._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(clearActiveBinProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinProduct(product));
                dispatch(subtractOneDashboardBinProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue removido de forma permanente exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
                console.log(body.msg);
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

    const startSetActiveBinProduct = () => {

        dispatch(setActiveBinProduct());
    }

    /* USERS */

    const startLoadBinUsers = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            const resp = await fetchConToken(`bin/users/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered users', body);

                const filteredUsers = body.results;

                console.log(filteredUsers)

                dispatch(loadBinUsers(filteredUsers));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const userBinStartEnable = async (user) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`bin/users/${user._id}`, {}, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(clearActiveBinUser());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinUser(user));
                dispatch(addUser(user));

                dispatch(addOneDashboardUsers());
                dispatch(subtractOneDashboardBinUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue habilitado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar habilitar el usuario! Hable con el administrador'));
                console.log(body.msg);
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

            const resp = await fetchConToken(`bin/users/${user._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(clearActiveBinUser());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteBinUser(user));
                dispatch(subtractOneDashboardBinUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue removido de forma permanente exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el usuario! Hable con el administrador'));
                console.log(body.msg);
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

    const startSetActiveBinUser = () => {

        dispatch(setActiveBinUser());
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