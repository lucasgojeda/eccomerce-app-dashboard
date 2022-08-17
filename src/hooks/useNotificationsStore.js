import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import {
    loadNotifications,
    updateNotification
} from "../store/slices/notificationsSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenSuccessAlert
} from "../store/slices/uiSlice";


export const useNotificationsStore = () => {

    const dispatch = useDispatch();
    const { notifications, sales_user } = useSelector(state => state.notifications);


    const startLoadNotifications = async () => {

        try {

            const resp = await fetchConToken('notifications');
            const body = await resp.json();


            if (body.msg === 'OK') {

                console.log(body)

                dispatch(loadNotifications({
                    sales_user: body.sales,
                    notifications: body.notifications
                }));

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const notificationStartUpdated = async (notification) => {

        try {

            const resp = await fetchConToken(`notifications/${notification._id}`, {}, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(updateNotification(body.notification));

                dispatch(uiCloseProgressBackdrop());

                dispatch(uiOpenSuccessAlert('La categoria fue actualizada exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
            console.log(error);
        }

    }


    return {
        //* Propiedades
        notifications,
        sales_user,

        //* Métodos
        startLoadNotifications,
        notificationStartUpdated,
    }
}
