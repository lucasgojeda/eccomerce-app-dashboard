import React, { useEffect } from 'react';

import { RecordModal } from '../modals/RecordModal'
import { RecordsTable } from '../table/RecordsTable';

import { useRecordsStore } from '../../../hooks';


export const RecordPage = () => {

    const { startClearActiveRecord } = useRecordsStore();

    useEffect(() => {

        startClearActiveRecord();

    }, []);

    return (
        <>

            <RecordModal />

            <RecordsTable />

        </>
    );
};