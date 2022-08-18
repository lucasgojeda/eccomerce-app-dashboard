import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';


import {
    useStaticsStore,
} from '../hooks';

import { ProductsPage } from '../components/products';
import { UsersPage } from '../components/users';
import { RecordPage } from '../components/records';
import { BinProductsPage } from '../components/bin-products';
import { BinUsersPage } from '../components/bin-users';
import { SalesPage } from '../components/sales';
import { HomePage } from '../components/home';


export const DashboardRouter = () => {

    const { startLoadStatistics } = useStaticsStore();


    useEffect(() => {

        startLoadStatistics();
    }, []);

    return (
        <>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="regist" element={<RecordPage />} />
                <Route path="bin/products" element={<BinProductsPage />} />
                <Route path="bin/users" element={<BinUsersPage />} />
                <Route path="sales" element={<SalesPage />} />

                {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>

        </>

    );
};

