import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';


import {
    useBinStore,
    useCategoriesStore,
    useNotificationsStore,
    useProductsStore,
    useRecordsStore,
    useSalesStore,
    useStaticsStore,
    useUsersStore
} from '../hooks';

import { ProductsPage } from '../components/products';
import { UsersPage } from '../components/users';
import { RecordPage } from '../components/records';
import { BinProductsPage } from '../components/bin-products';
import { BinUsersPage } from '../components/bin-users';
import { SalesPage } from '../components/sales';
import { CardProducts } from '../components/ui';


export const DashboardRouter = () => {

    const { pathname } = useLocation();

    const { startLoadBinProducts, startLoadBinUsers } = useBinStore();
    const { startLoadStatistics } = useStaticsStore();
    const { startLoadRecords } = useRecordsStore();
    const { startLoadUsers } = useUsersStore();
    const { startLoadSales } = useSalesStore();
    const { startLoadNotifications } = useNotificationsStore();
    const { startLoadCategories } = useCategoriesStore();
    const { startLoadProducts } = useProductsStore();


    useEffect(() => {

        startLoadStatistics();
        startLoadUsers();
        startLoadBinUsers();
        startLoadBinProducts();
        startLoadRecords();

        startLoadSales();
        startLoadNotifications();
        startLoadCategories();
        startLoadProducts();

    }, []);

    return (
        <>


            <Routes>
                <Route path="products" element={<ProductsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="regist" element={<RecordPage />} />
                <Route path="bin/products" element={<BinProductsPage />} />
                <Route path="bin/users" element={<BinUsersPage />} />
                <Route path="sales" element={<SalesPage />} />
            </Routes>


            {
                (pathname === '/dashboard')
                &&
                <CardProducts />
            }
        </>

    );
};

