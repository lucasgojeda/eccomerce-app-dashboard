import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearActiveProduct } from '../../../store/slices/productSlice';
import { clearActiveUser } from '../../../store/slices/userSlice';

import { CreateProductModal } from './modals/CreateProductModal';
import { ProductsDashboardTable } from './tables/ProductsDashboardTable';


export const ProductsPage = () => { 

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(clearActiveProduct());
        dispatch(clearActiveUser());

    }, []);

    return (
        <>

            <CreateProductModal />

            <ProductsDashboardTable />

        </>
    );
};