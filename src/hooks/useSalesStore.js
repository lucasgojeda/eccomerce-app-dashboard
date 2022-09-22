import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { cartLogout } from "../store/slices/cartSlice";

import {
    addNotification,
    addSale_user
} from "../store/slices/notificationsSlice";

import {
    addNewSale,
    clearActiveSale,
    loadSales,
    setActiveSale,
    updateFilteredSales
} from "../store/slices/saleSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert,
    uiStartTableLoading,
    uiStopTableLoading
} from "../store/slices/uiSlice";


export const useSalesStore = () => {

    const dispatch = useDispatch();
    const { sales, activeSale } = useSelector(state => state.sales);


    const startLoadSales = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            dispatch(uiStartTableLoading());
            const { data: { msg, results } } = await dashboardApi.get(`sales/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);


            if (msg === 'OK') {

                console.log('Filtered sales', results);

                const filteredSales = results;

                console.log(filteredSales)

                dispatch(loadSales(filteredSales));

                window.scroll(0, 0);
                dispatch(uiStopTableLoading());

            } else {
                if (msg) {
                    dispatch(uiStopTableLoading());
                    console.log(msg);
                }
            }


        } catch (error) {
            dispatch(uiStopTableLoading());
            console.log(error);
        }
    }

    const salesStartAddNew = async () => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, sale } } = await dashboardApi.post('sales', {});

            console.log({ msg, sale });


            if (msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addNewSale(sale));
                dispatch(cartLogout());

                dispatch(uiOpenSuccessAlert('Compra realizada exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            console.log(error);
        }
    }

    const salesStartUpdated = async (id) => {

        try {

            const { data: { msg, results, notification } } = await dashboardApi.put(`sales/${id}`, {});

            console.log({ msg, results, notification })


            if (msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addNotification(notification));
                dispatch(addSale_user(results));
                dispatch(updateFilteredSales(results));

                dispatch(uiOpenSuccessAlert('El estado de la venta fue actualizado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el estado de la venta! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el estado de la venta! Hable con el administrador'));
            console.log(error);
        }

    }

    const startSetActiveSale = (sale) => {

        dispatch(setActiveSale(sale));
    }

    const startClearActiveSale = () => {

        dispatch(clearActiveSale());
    }


    return {
        //* Propiedades
        sales,
        activeSale,

        //* Métodos
        startLoadSales,
        salesStartAddNew,
        salesStartUpdated,
        startSetActiveSale,
        startClearActiveSale,
    }
}
