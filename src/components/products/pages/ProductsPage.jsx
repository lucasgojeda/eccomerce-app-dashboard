import React, { useEffect } from 'react';

import { CreateProductModal } from '../modals/CreateProductModal';
import { ProductsTable } from '../table/ProductsTable';

import {
    useCategoriesStore,
    useProductsStore,
    useUsersStore
} from '../../../hooks';


export const ProductsPage = () => {

    const { startLoadCategories } = useCategoriesStore();

    const { startClearActiveProduct } = useProductsStore();
    const { startClearActiveUser } = useUsersStore();

    useEffect(() => {

        startLoadCategories();

        startClearActiveProduct();
        startClearActiveUser();

    }, []);

    return (
        <>

            <CreateProductModal />

            <ProductsTable />

        </>
    );
};