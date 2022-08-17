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

import { LoginPage } from '../components/auth';

import { DashboardRouter } from './DashboardRouter';
import { NavbarDashboard } from '../components/ui/navbar/NavbarDashboard';


import { PublicRoute } from './PublicRoute';
import { AdminRoute } from './AdminRoute';

import { EditProductModal } from '../components/products/modals/EditProductModal';
import { CategoriesModal } from '../components/categories/modals/CategoriesModal';

import { ErrorAlert } from '../components/ui/alerts/ErrorAlert';
import { SuccessAlert } from '../components/ui/alerts/SuccessAlert';
import { DialogDelete } from '../components/ui/alerts/DialogDelete';
import { DialogFields } from '../components/ui/alerts/DialogFields';
import { ProgressBackdrop } from '../components/ui/progress/ProgressBackdrop';

import { useAuthStore } from '../hooks';




export const AppRouter = () => {

    const { uid, checking, role, startChecking } = useAuthStore();


    useEffect(() => {

        startChecking();
    }, [])


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

            <EditProductModal />
            <CategoriesModal />
            <ProgressBackdrop />
            <DialogDelete />
            <DialogFields />
            <ErrorAlert />
            <SuccessAlert />

            <Routes>


                <Route path="login" element={
                    <PublicRoute isAutenticated={!!uid}>
                        <>
                            <LoginPage />
                        </>
                    </PublicRoute>
                } />


                <Route path="dashboard/*" element={
                        <>
                            <NavbarDashboard />
                            <DashboardRouter />
                        </>
                } />


                <Route path="/*" element={<Navigate to="/dashboard" />} />


            </Routes>

        </BrowserRouter>
    );
};