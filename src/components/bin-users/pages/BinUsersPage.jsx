import React, { useEffect } from 'react';

import { BinUsersTable } from '../table/BinUsersTable';

import { useBinStore } from '../../../hooks';


export const BinUsersPage = () => {

    const { startClearActiveBinProduct, startClearActiveBinUser } = useBinStore();


    useEffect(() => {

        startClearActiveBinProduct();
        startClearActiveBinUser();


    }, []);

    return (
        <>

            <BinUsersTable />

        </>
    );
};