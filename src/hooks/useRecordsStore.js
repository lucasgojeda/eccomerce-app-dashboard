import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import {
    loadRecords,
    recordsLogout,
    setActiveRecord
} from "../store/slices/recordsSlice";


export const useRecordsStore = () => {

    const dispatch = useDispatch();
    const { records, activeRecord } = useSelector(state => state.records);


    const startLoadRecords = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            const { data: { msg, results } } = await dashboardApi.get(`records/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);

            if (msg === 'OK') {

                console.log('Filtered records', data);

                const filteredRecords = results;

                dispatch(loadRecords(filteredRecords));

                window.scroll(0, 0);

            } else {
                console.log(msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const startDeleteRecords = async () => {

        try {
            const { data: { msg } } = await dashboardApi.delete('records', {});

            if (msg === 'OK') {

                dispatch(recordsLogout());

            } else {
                console.log(msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const startSetActiveRecord = (record) => {

        dispatch(setActiveRecord(record));
    }


    return {
        //* Propiedades
        records,
        activeRecord,

        //* Métodos
        startLoadRecords,
        startDeleteRecords,
        startSetActiveRecord,
    }
}
