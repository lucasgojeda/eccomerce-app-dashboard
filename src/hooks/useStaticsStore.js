import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

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

            const { data: { msg, results } } = await dashboardApi.get('dashboard/logged');


            if (msg === 'OK') {

                console.log('statics', results)

                dispatch(loadDashboardProducts(results.products));
                dispatch(loadDashboardBinProducts(results.binProducts));
                dispatch(loadDashboardUsers(results.users));
                dispatch(loadDashboardBinUsers(results.binUsers));
                dispatch(loadDashboardSales(results.sales));
                dispatch(loadDashboardRecords(results.records));

            }

        } catch (error) {
            console.log(error);
        }
    }



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
