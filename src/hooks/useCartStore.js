import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import {
    deleteCartProduct,
    updateCartProduct
} from "../store/slices/cartSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert
} from "../store/slices/uiSlice";


export const useCartStore = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);


    const startUpdatedCart = async(cart, id) => {

        try {

            const resp = await fetchConToken(`users/cart/${id}`, cart, 'PUT');
            const body = await resp.json();

            console.log(body);

            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateCartProduct(body.product));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
            console.log(error);
        }

    }

    const startDeletedCart = async(cart, id) => {

        try {

            const resp = await fetchConToken(`users/cart/${id}`, cart, 'DELETE');
            const body = await resp.json();

            console.log(body);

            if (body.msg === 'OK') {

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteCartProduct(body.product));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error trying to update the user! Talk to developer'));
            console.log(error);
        }

    }


    return {
        //* Propiedades
        cart,

        //* Métodos
        startUpdatedCart,
        startDeletedCart,
    }
}
