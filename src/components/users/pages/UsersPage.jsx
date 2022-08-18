import React, { useEffect } from 'react';

import { CreateUserModal } from '../modals/CreateUserModal';
import { EditUserModal } from '../modals/EditUserModal';
import { UsersTable } from '../table/UsersTable';

import { useProductsStore, useUsersStore } from '../../../hooks';


export const UsersPage = () => {

    const { startSetActiveProduct } = useProductsStore();
    const { startSetActiveUser } = useUsersStore();

    useEffect(() => {

        startSetActiveProduct();
        startSetActiveUser();


    }, []);

    return (
        <>


            <UsersTable />

            <EditUserModal />

            <CreateUserModal />

        </>
    );
};