import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

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
    uiOpenSuccessAlert,
    uiStartTableLoading,
    uiStopTableLoading
} from "../store/slices/uiSlice";

import {
    addUser,
    clearActiveUser,
    deleteUser,
    loadUsers,
    setActiveUser,
    updateUser
} from "../store/slices/userSlice";


export const useUsersStore = () => {

    const dispatch = useDispatch();
    const { users, activeUser } = useSelector(state => state.users);


    const startLoadUsers = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            dispatch(uiStartTableLoading());
            const { data: { msg, results } } = await dashboardApi.get(`users/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);


            if (msg === 'OK') {

                console.log('Filtered users', results);

                const filteredUsers = results;

                dispatch(loadUsers(filteredUsers));

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

    const userStartAddNew = async (_user) => {

        try {

            const { data: { msg, user, record } } = await dashboardApi.post('users', _user);


            if (msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addUser(user));
                dispatch(addOneDashboardUsers());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el usuario! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el usuario! Hable con el administrador'));
            console.log(error);
        }
    }

    const userStartUpdated = async (_user) => {

        try {

            const { data: { msg, user, record } } = await dashboardApi.put(`users/${_user._id}`, { user: _user });



            if (msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateUser(user));

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue actualizado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el usuario! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el usuario! Hable con el administrador'));
            console.log(error);
        }

    }

    const userStartDeleted = async (_user) => {


        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, user, record } } = await dashboardApi.delete(`users/${_user._id}`, {});


            if (msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteUser(user));
                dispatch(subtractOneDashboardUsers());

                dispatch(addBinUser(user));
                dispatch(addOneDashboardBinUsers());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El usuario fue eliminado exitosamente!'));

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

    const startSetActiveUser = (user) => {

        dispatch(setActiveUser(user));
    }

    const startClearActiveUser = () => {

        dispatch(clearActiveUser());
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
        startSetActiveUser,
        startClearActiveUser,
    }
}
