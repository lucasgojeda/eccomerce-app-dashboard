import React, { useEffect } from 'react';

import { useBinStore } from '../../../hooks';

import { BinProductsTable } from '../table/BinProductsTable';


export const BinProductsPage = () => {

    const { startClearActiveBinProduct, startClearActiveBinUser } = useBinStore();


    useEffect(() => {

        startClearActiveBinProduct();
        startClearActiveBinUser();

    }, []);


    return (
        <>

            <BinProductsTable />

        </>
    );
};