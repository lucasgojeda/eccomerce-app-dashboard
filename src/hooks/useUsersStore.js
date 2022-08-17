import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import { addBinUser } from "../store/slices/binSlice";

import {
    addOneDashboardBinUsers,
    addOneDashboardRecords,
    addOneDashboardUsers,
    subtractOneDashboardUsers
} from "../store/slices/staticsSlice";

import { addNewRecord } from "../store/slices/recordsSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../store/slices/uiSlice";

import {
    addUser,
    deleteUser,
    loadUsers,
    updateUser
} from "../store/slices/userSlice";


export const useUsersStore = () => {

    const dispatch = useDispatch();
    const { users, activeUser } = useSelector(state => state.users);


    const startLoadUsers = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            const resp = await fetchConToken(`users/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log('Filtered users', body);

                const filteredUsers = body.results;

                console.log(filteredUsers)

                dispatch(loadUsers(filteredUsers));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const userStartAddNew = async (user) => {

        try {

            const resp = await fetchConToken('users', user, 'POST');
            const body = await resp.json();


            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addUser(body.user));
                dispatch(addOneDashboardUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el usuario! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el usuario! Hable con el administrador'));
            console.log(error);
        }
    }

    const userStartUpdated = async (user) => {

        try {

            const resp = await fetchConToken(`users/${user._id}`, { user: user }, 'PUT');
            const body = await resp.json();


            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateUser(body.user));

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue actualizado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el usuario! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }

    const userStartDeleted = async (user) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const resp = await fetchConToken(`users/${user._id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteUser(body.user));
                dispatch(subtractOneDashboardUsers());

                dispatch(addBinUser(body.user));
                dispatch(addOneDashboardBinUsers());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue eliminado exitosamente!'));

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


    return {
        //* Propiedades
        users,
        activeUser,

        //* Métodos
        startLoadUsers,
        userStartAddNew,
        userStartUpdated,
        userStartDeleted,
    }
}
