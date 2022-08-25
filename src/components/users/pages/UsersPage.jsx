import React, { useEffect } from 'react';

import { CreateUserModal } from '../modals/CreateUserModal';
import { EditUserModal } from '../modals/EditUserModal';
import { UsersTable } from '../table/UsersTable';

import { useProductsStore, useUsersStore } from '../../../hooks';


export const UsersPage = () => {

    const { startClearActiveProduct } = useProductsStore();
    const { startClearActiveUser } = useUsersStore();

    useEffect(() => {

        startClearActiveProduct();
        startClearActiveUser();


    }, []);

    return (
        <>


            <UsersTable />

            <EditUserModal />

            <CreateUserModal />

        </>
    );
};