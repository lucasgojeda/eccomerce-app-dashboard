import React from 'react';

import { RecordModal } from './modals/RecordModal'
import { RecordsDashboardTable } from './tables/RecordsDashboardTable';

export const RecordPage = () => {

    return (
        <>

            <RecordModal />


            <RecordsDashboardTable />

        </>
    );
};