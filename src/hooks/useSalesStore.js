import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import { cartLogout } from "../store/slices/cartSlice";

import {
    addNotification,
    addSale_user
} from "../store/slices/notificationsSlice";

import {
    addNewSale,
    loadSales,
    updateFilteredSales
} from "../store/slices/saleSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../store/slices/uiSlice";


export const useSalesStore = () => {

    const dispatch = useDispatch();
    const { sales, activeSale } = useSelector(state => state.sales);


    const startLoadSales = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            const resp = await fetchConToken(`sales/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp?.json();


            if (body?.msg === 'OK') {

                console.log('Filtered sales', body);

                const filteredSales = body.results;

                console.log(filteredSales)

                dispatch(loadSales(filteredSales));

                window.scroll(0, 0);

            } else {
                if (body?.msg) {

                    console.log(body.msg);
                }
            }


        } catch (error) {
            console.log(error);
        }
    }

    const salesStartAddNew = async () => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken('sales', {}, 'POST');
            const body = await resp.json();

            console.log(body);

            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addNewSale(body.sale));
                dispatch(cartLogout());

                dispatch(uiOpenSuccessAlert('Compra realizada exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            console.log(error);
        }
    }

    const salesStartUpdated = async (id) => {

        try {

            const resp = await fetchConToken(`sales/${id}`, {}, 'PUT');
            const body = await resp.json();

            console.log(body)

            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addNotification(body.notification));
                dispatch(addSale_user(body.results));
                dispatch(updateFilteredSales(body.results));

                dispatch(uiOpenSuccessAlert('El estado de la venta fue actualizado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el estado de la venta! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el estado de la venta! Hable con el administrador'));
            console.log(error);
        }

    }


    return {
        //* Propiedades
        sales,
        activeSale,

        //* Métodos
        startLoadSales,
        salesStartAddNew,
        salesStartUpdated,
    }
}
