import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import { addBinProduct } from "../store/slices/binSlice";
import { addNewRecord } from "../store/slices/recordsSlice";

import {
    addOneDashboardProducts,
    addOneDashboardRecords,
    subtractOneDashboardProducts
} from "../store/slices/staticsSlice";

import {
    addProduct,
    clearActiveProduct,
    deleteProduct,
    loadProducts,
    updateProduct
} from "../store/slices/productSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../store/slices/uiSlice";


export const useProductsStore = () => {

    const dispatch = useDispatch();
    const { products, activeProduct } = useSelector(state => state.product);


    const startLoadProducts = async (filterBy, orderBy, searchText, page = 1) => {

        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {

            const resp = await fetchSinToken(`products/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);
            const body = await resp.json();


            if (body.msg === 'OK') {

                // console.log('Filtered products', body);

                const filteredProducts = body.results;

                console.log(filteredProducts)

                dispatch(loadProducts(filteredProducts));

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const productStartAddNew = async (product) => {

        try {

            const { category } = product;

            const productNew = { ...product, category: category.name };

            console.log(productNew)

            const resp = await fetchConToken('products', productNew, 'POST');
            const body = await resp.json();

            console.log(body);

            if (body.msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addProduct(body.product));
                dispatch(addOneDashboardProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
            console.log(error);
        }
    }

    const productStartUpdated = async (product) => {

        try {

            const { category } = product

            const productNew = { ...product, category: category.name }

            const resp = await fetchConToken(`products/${product._id}`, { product: productNew }, 'PUT');
            const body = await resp.json();

            console.log(body);


            if (body.msg === 'OK') {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateProduct(body.product));

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue actualizado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const productStartDeleted = async (product) => {

        try {

            dispatch(uiOpenProgressBackdrop());


            const resp = await fetchConToken(`products/${product._id}`, {}, 'DELETE');
            const body = await resp.json();

            console.log(body);


            if (body.msg === "OK") {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteProduct(body.product));
                dispatch(subtractOneDashboardProducts());

                dispatch(addBinProduct(body.product));
                dispatch(addOneDashboardBinProducts());

                dispatch(addNewRecord(body.record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue eliminado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
                console.log(body.msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
            console.log(error);
        }

    }


    return {
        //* Propiedades
        products,
        activeProduct,

        //* Métodos
        startLoadProducts,
        productStartAddNew,
        productStartUpdated,
        productStartDeleted,
    }
}
