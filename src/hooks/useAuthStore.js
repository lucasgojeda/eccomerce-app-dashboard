import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import { usersLogout } from "../store/slices/userSlice";
import { recordsLogout } from "../store/slices/recordsSlice";
import { salesLogout } from "../store/slices/saleSlice";
import { staticsLogout } from "../store/slices/staticsSlice";
import { notificationsLogout } from "../store/slices/notificationsSlice";

import {
    authCheckingFinish,
    authLogin,
    authLogout
} from "../store/slices/authSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenProgressBackdrop
} from "../store/slices/uiSlice";

import {
    cartLogout,
    loadCart
} from "../store/slices/cartSlice";

import {
    productsBinLogout,
    usersBinLogout
} from "../store/slices/binSlice";


export const useAuthStore = () => {

    const dispatch = useDispatch();
    const { checking, uid, name, role } = useSelector(state => state.auth);


    const StartLogin = async (email, password) => {

        try {

            dispatch(uiOpenProgressBackdrop());
            const resp = await fetchSinToken('auth/login', { email, password }, 'POST');
            const body = await resp.json();

            if (body.token) {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(authLogin({
                    uid: body.user._id,
                    name: body.user.name,
                    role: body.user.role
                }));
                dispatch(loadCart(body.user.cart));

                dispatch(uiCloseProgressBackdrop());

            } else {
                dispatch(uiCloseProgressBackdrop());
                return console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            return console.log(error);
        }
    }

    const startRegister = async (name, email, password, role = 'USER_ROLE') => {

        try {
            dispatch(uiOpenProgressBackdrop());
            const resp = await fetchSinToken('users', { name, email, password, role }, 'POST');
            const body = await resp.json();

            console.log(body);

            if (body.msg === 'OK') {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(authLogin({
                    uid: body.user._id,
                    name: body.user.name,
                    role: body.user.role,
                }));
                dispatch(loadCart(body.user.cart));

                dispatch(uiCloseProgressBackdrop());
            } else {
                (body.errors !== undefined) && console.log(body.errors);
                (body.msg !== undefined) && console.log(body.msg);
                dispatch(uiCloseProgressBackdrop());

            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            console.log(error);
        }

    }

    const startChecking = async () => {

        try {
            const resp = await fetchConToken('auth/renew');
            const body = await resp?.json();

            if (body?.msg === 'OK') {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(authLogin({
                    uid: body._id,
                    name: body.name,
                    role: body.role,
                }));
                dispatch(loadCart(body.cart));

            } else {


                if (body?.msg === 'invalid token.') {

                    const removeToken = new Promise((resolve, reject) => {
                        resolve(() => {
                            localStorage.removeItem('token-init-date');
                            localStorage.removeItem('token');
                        });
                    });

                    removeToken
                        .then(dispatch(authCheckingFinish()))
                } else {
                    dispatch(authCheckingFinish())
                }
            }

        } catch (error) {
            dispatch(authCheckingFinish());
            console.log(error);

        }

    }

    const startLogout = () => {

        try {

            dispatch(uiOpenProgressBackdrop());

            dispatch(usersLogout());
            dispatch(usersBinLogout());
            dispatch(productsBinLogout());
            dispatch(recordsLogout());
            dispatch(salesLogout());
            dispatch(staticsLogout());
            dispatch(cartLogout());
            dispatch(notificationsLogout());
            dispatch(authLogout());

            dispatch(uiCloseProgressBackdrop());

        } catch (error) {
            console.log(error)
            dispatch(uiCloseProgressBackdrop());
        }
    }

    const startGoogleLogin = async (id_token) => {

        try {
            dispatch(uiOpenProgressBackdrop());
            const resp = await fetchSinToken('auth/google', { id_token }, 'POST');
            const body = await resp.json();

            if (body.msg === 'OK') {

                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());


                dispatch(authLogin({
                    uid: body.user._id,
                    name: body.user.name,
                    role: body.user.role,
                }));
                dispatch(loadCart(body.user.cart));

                dispatch(uiCloseProgressBackdrop());

            } else {
                dispatch(uiCloseProgressBackdrop());
                return console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            return console.log(error);
        }

    }


    return {
        //* Propiedades
        checking,
        uid,
        name,
        role,

        //* Métodos
        StartLogin,
        startRegister,
        startChecking,
        startLogout,
        startGoogleLogin,
    }
}
