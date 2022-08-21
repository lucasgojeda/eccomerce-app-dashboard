import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

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

            const { data: { msg, sales, notifications } } = await dashboardApi.get('notifications');

            console.log({ msg, sales, notifications })

            if (msg === 'OK') {

                dispatch(loadNotifications({
                    sales_user: sales,
                    notifications: notifications
                }));

            } else {
                console.log(msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const notificationStartUpdated = async (_notification) => {

        try {

            const { data: { msg, notification } } = await dashboardApi.put(`notifications/${_notification._id}`, {});
            

            console.log({ msg, notification });


            if (msg === 'OK') {

                dispatch(updateNotification(notification));

                dispatch(uiCloseProgressBackdrop());

                dispatch(uiOpenSuccessAlert('La categoria fue actualizada exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar la categoria! Hable con el administrador'));
                console.log(msg);
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
