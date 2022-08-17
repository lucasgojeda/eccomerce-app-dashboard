import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearActiveProduct } from '../../../store/slices/productSlice';
import { clearActiveUser } from '../../../store/slices/userSlice';

import { CreateUserModal } from './modals/CreateUserModal';
import { EditUserModal } from './modals/EditUserModal';
import { UsersDashboardTable } from './tables/UsersDashboardTable';


export const UsersPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(clearActiveProduct());
        dispatch(clearActiveUser());


    }, []);

    return (
        <>


            <UsersDashboardTable />

            <EditUserModal />

            <CreateUserModal />

        </>
    );
};