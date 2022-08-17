import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import {
    loadDashboardBinProducts,
    loadDashboardBinUsers,
    loadDashboardProducts,
    loadDashboardRecords,
    loadDashboardSales,
    loadDashboardUsers
} from "../store/slices/staticsSlice";


export const useStaticsStore = () => {

    const dispatch = useDispatch();
    const {
        dashboardProducts,
        dashboardBinProducts,
        dashboardUsers,
        dashboardBinUsers,
        dashboardSales,
        dashboardRecords
    } = useSelector(state => state.statics);


    const startLoadStatistics = async () => {

        try {

            const { data } = await dashboardApi.get('dashboard/logged');
            // const resp = await fetchConToken('dashboard/logged');
            // const body = await resp?.json();
            console.log(data)

            if (data?.msg === 'OK') {

                console.log('statics', data.results)

                dispatch(loadDashboardProducts(data.results.products));
                dispatch(loadDashboardBinProducts(data.results.binProducts));
                dispatch(loadDashboardUsers(data.results.users));
                dispatch(loadDashboardBinUsers(data.results.binUsers));
                dispatch(loadDashboardSales(data.results.sales));
                dispatch(loadDashboardRecords(data.results.records));

            }
            // else {

            //     (data?.msg) && console.log(data.msg);

            //     try {

            //         const resp = await fetchSinToken('dashboard/unlogged');
            //         const data = await resp?.json();

            //         console.log('staticProduct', body)

            //         if (body?.msg === 'OK') {

            //             // console.log(body.results)

            //             dispatch(loadDashboardProducts(body.results.products));
            //         }

            //     } catch (error) {
            //         console.log(error);
            //     }

            // }


        } catch (error) {
            console.log(error);
        }
    }

    // const loadDashboardProducts = (products) => ({
    //     type: types.loadDashboardProducts,
    //     payload: products
    // })

    // const loadDashboardBinProducts = (binProducts) => ({
    //     type: types.loadDashboardBinProducts,
    //     payload: binProducts
    // })

    // const loadDashboardUsers = (users) => ({
    //     type: types.loadDashboardUsers,
    //     payload: users
    // })

    // const loadDashboardBinUsers = (binUsers) => ({
    //     type: types.loadDashboardBinUsers,
    //     payload: binUsers
    // })

    // const loadDashboardSales = (sales) => ({
    //     type: types.loadDashboardSales,
    //     payload: sales
    // })

    // const loadDashboardRecords = (records) => ({
    //     type: types.loadDashboardRecords,
    //     payload: records
    // })


    // export const addOneDashboardProducts = () => ({
    //     type: types.addOneDashboardProducts
    // })

    // export const subtractOneDashboardProducts = () => ({
    //     type: types.subtractOneDashboardProducts
    // })

    // export const addOneDashboardBinProducts = () => ({
    //     type: types.addOneDashboardBinProducts
    // })
    // export const subtractOneDashboardBinProducts = () => ({
    //     type: types.subtractOneDashboardBinProducts
    // })

    // export const addOneDashboardUsers = () => ({
    //     type: types.addOneDashboardUsers
    // })
    // export const subtractOneDashboardUsers = () => ({
    //     type: types.subtractOneDashboardUsers
    // })

    // export const addOneDashboardBinUsers = () => ({
    //     type: types.addOneDashboardBinUsers
    // })
    // export const subtractOneDashboardBinUsers = () => ({
    //     type: types.subtractOneDashboardBinUsers
    // })

    // export const addOneDashboardSales = () => ({
    //     type: types.addOneDashboardSales
    // })
    // export const subtractOneDashboardSales = () => ({
    //     type: types.subtractOneDashboardSales
    // })

    // export const addOneDashboardRecords = () => ({
    //     type: types.addOneDashboardRecords
    // })
    // export const subtractOneDashboardRecords = () => ({
    //     type: types.subtractOneDashboardRecords
    // })


    // export const staticsLogout = () => ({
    //     type: types.staticsLogout
    // })






    return {
        //* Propiedades
        dashboardProducts,
        dashboardBinProducts,
        dashboardUsers,
        dashboardBinUsers,
        dashboardSales,
        dashboardRecords,

        //* Métodos
        startLoadStatistics,
    }
}
