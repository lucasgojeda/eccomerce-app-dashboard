import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Routes,
    Route,
    BrowserRouter,
    Navigate
} from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { AdminRoute } from './AdminRoute';
import { PublicRoute } from './PublicRoute';

import { NavbarDashboard } from '../components/ui/navbar/NavbarDashboard';

import { EditProductModal } from '../components/products/modals/EditProductModal';
import { CategoriesModal } from '../components/categories/modals/CategoriesModal';

import { LoginPage } from '../components/auth';
import { ProductsPage } from '../components/products';
import { UsersPage } from '../components/users';
import { RecordPage } from '../components/records';
import { BinProductsPage } from '../components/bin-products';
import { BinUsersPage } from '../components/bin-users';
import { SalesPage } from '../components/sales';
import { HomePage } from '../components/home';

import { ErrorAlert } from '../components/ui/alerts/ErrorAlert';
import { SuccessAlert } from '../components/ui/alerts/SuccessAlert';
import { DialogDelete } from '../components/ui/alerts/DialogDelete';
import { DialogFields } from '../components/ui/alerts/DialogFields';
import { ProgressBackdrop } from '../components/ui/progress/ProgressBackdrop';

import { useAuthStore, useStaticsStore } from '../hooks';




export const AppRouter = () => {

    const { uid, checking, role, startChecking } = useAuthStore();
    const { startLoadStatistics } = useStaticsStore();

    useEffect(() => {

        startChecking();
    }, [])

    useEffect(() => {

        if (uid) {
            startLoadStatistics();
        }
    }, [uid])


    if (checking) {

        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" size='80px' sx={{ display: 'block' }} />
        </Backdrop>
    }


    return (


        <BrowserRouter>

            <Routes>


                <Route path="login" element={
                    <PublicRoute isAutenticated={!!uid}>
                        <LoginPage />
                    </PublicRoute>
                } />


                <Route path="/" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <HomePage />
                        </>
                    </AdminRoute>
                } />

                <Route path="products" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <ProductsPage />
                        </>
                    </AdminRoute>
                } />

                <Route path="users" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <UsersPage />
                        </>
                    </AdminRoute>
                } />

                <Route path="regist" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <RecordPage />
                        </>
                    </AdminRoute>
                } />

                <Route path="bin/products" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <BinProductsPage />
                        </>
                    </AdminRoute>
                } />

                <Route path="bin/users" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <BinUsersPage />
                        </>
                    </AdminRoute>
                } />

                <Route path="sales" element={
                    <AdminRoute isRole={role}>
                        <>
                            <NavbarDashboard />
                            <SalesPage />
                        </>
                    </AdminRoute>
                } />


                <Route path="/*" element={<Navigate to="/" />} />


            </Routes>


            <EditProductModal />
            <CategoriesModal />
            <ProgressBackdrop />
            <DialogDelete />
            <DialogFields />
            <ErrorAlert />
            <SuccessAlert />

        </BrowserRouter>
    );
};