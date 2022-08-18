import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

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
    setActiveProduct,
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

            const { data } = await dashboardApi.get(`products/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}`);

            const { msg, results } = data;

            if (msg === 'OK') {

                // console.log('Filtered products', body);

                const filteredProducts = results;

                console.log(filteredProducts)

                dispatch(loadProducts(filteredProducts));

                window.scroll(0, 0);

            } else {
                console.log(msg);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const productStartAddNew = async (_product) => {

        try {

            const { category } = _product;

            const productNew = { ..._product, category: category.name };

            const { data: { msg, product, record } } = await dashboardApi.post('products', productNew);

            console.log(data);


            if (msg === "OK") {

                dispatch(uiCloseProgressBackdrop());

                dispatch(addProduct(product));
                dispatch(addOneDashboardProducts());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue creado exitosamente!'));

            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar crear el producto! Hable con el administrador'));
            console.log(error);
        }
    }

    const productStartUpdated = async (_product) => {

        try {

            const { category } = _product

            const productNew = { ..._product, category: category.name }

            const { data } = await dashboardApi.put(`products/${_product._id}`, { product: productNew });

            console.log(data);

            const { msg, product, record } = data;


            if (msg === 'OK') {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(updateProduct(product));

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue actualizado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar actualizar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const productStartDeleted = async (_product) => {

        try {

            dispatch(uiOpenProgressBackdrop());

            const { data: { msg, record, product } } = await dashboardApi.delete(`products/${_product._id}`, {});

            console.log(data);


            if (msg === "OK") {

                dispatch(clearActiveProduct());

                dispatch(uiCloseProgressBackdrop());

                dispatch(deleteProduct(product));
                dispatch(subtractOneDashboardProducts());

                dispatch(addBinProduct(product));
                dispatch(addOneDashboardBinProducts());

                dispatch(addNewRecord(record));
                dispatch(addOneDashboardRecords());

                dispatch(uiOpenSuccessAlert('El producto fue eliminado exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar el producto! Hable con el administrador'));
            console.log(error);
        }

    }

    const startSetActiveProduct = (product) => {

        dispatch(setActiveProduct(product));
    }

    const startClearActiveProduct = () => {

        dispatch(clearActiveProduct());
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
        startSetActiveProduct,
        startClearActiveProduct,
    }
}
