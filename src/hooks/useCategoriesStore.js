import { useDispatch, useSelector } from 'react-redux';

import dashboardApi from '../api/dashboardApi';

import {
    addNewCategory,
    clearActiveCategory,
    deleteCategory,
    loadCategories,
    setActiveCategory,
    updateCategory
} from "../store/slices/categoriesSlice";

import {
    uiCloseProgressBackdrop,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop,
    uiOpenSuccessAlert
} from "../store/slices/uiSlice";


export const useCategoriesStore = () => {

    const dispatch = useDispatch();
    const { categories, activeCategory } = useSelector(state => state.categories);


    const startLoadCategories = async () => {

        try {

            const { data: { categories: _categories, msg } } = await dashboardApi.get('categories');


            if (_categories) {

                // const categories = categories;

                console.log(_categories)

                dispatch(loadCategories(_categories));

            } else {
                return console.log(msg);
            }


        } catch (error) {
            return console.log(error);
        }
    }

    const startCreateCategory = async (name) => {

        if (name === '' || !name) {

            return;

        } else {

            try {

                const { data: { msg, category } } = await dashboardApi.post('categories', name);


                if (msg === "OK") {

                    dispatch(addNewCategory(category));

                    dispatch(uiCloseProgressBackdrop());

                    dispatch(uiOpenSuccessAlert('La categoria fue creada exitosamente!'));

                } else {

                    dispatch(uiCloseProgressBackdrop());
                    dispatch(uiOpenErrorAlert('Error al intentar crear la categoria! Hable con el administrador'));
                    console.log(msg);
                }

            } catch (error) {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert('Error al intentar crear la categoria! Hable con el administrador'));
                console.log(error);
            }
        }
    }

    const categoryStartUpdated = async (_category) => {

        try {

            const { data: { msg, category } } = await dashboardApi.put(`categories/${_category._id}`, _category);


            console.log(category);


            if (msg === 'OK') {

                dispatch(updateCategory(category));

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

    const categoryStartDeleted = async (_category) => {

        try {

            dispatch(uiOpenProgressBackdrop());


            const { data: { msg, category } } = await dashboardApi.delete(`categories/${_category._id}`, {});

            console.log(data);


            if (msg === "OK") {

                dispatch(deleteCategory(category));

                dispatch(uiCloseProgressBackdrop());

                dispatch(uiOpenSuccessAlert('La categoria fue eliminada exitosamente!'));


            } else {
                dispatch(uiCloseProgressBackdrop());
                dispatch(uiOpenErrorAlert(`${msg}`));
                console.log(msg);
            }


        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error al intentar eliminar la categoria! Hable con el administrador'));
            console.log(error);
        }

    }

    const startSetActiveCategory = (category) => {

        dispatch(setActiveCategory(category));
    }

    const startClearActiveCategory = () => {

        dispatch(clearActiveCategory());
    }



    return {
        //* Propiedades
        categories,
        activeCategory,

        //* Métodos
        startLoadCategories,
        startCreateCategory,
        categoryStartUpdated,
        categoryStartDeleted,
        startSetActiveCategory,
        startClearActiveCategory,
    }
}
