import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import {
    loadRecords,
    recordsLogout
} from "../store/slices/recordsSlice";


export const useRecordsStore = () => {

    const dispatch = useDispatch();
    const { records, activeRecord } = useSelector(state => state.records);


    const startLoadRecords = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            const resp = await fetchConToken(`records/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered records', body);

                const filteredRecords = body.results;

                console.log(filteredRecords)

                dispatch(loadRecords(filteredRecords));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const startDeleteRecords = async () => {

        try {
            const resp = await fetchConToken('records', {}, 'DELETE');
            const body = await resp.json();


            if (body.msg === 'OK') {

                dispatch(recordsLogout());

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }


    return {
        //* Propiedades
        records,
        activeRecord,

        //* Métodos
        startLoadRecords,
        startDeleteRecords,
    }
}
