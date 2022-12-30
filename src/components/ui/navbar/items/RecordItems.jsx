import React from 'react'
import { useLocation } from 'react-router';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useRecordsStore, useUiStore } from '../../../../hooks';


export const RecordItems = () => {

    const { pathname } = useLocation();

    const { activeRecord } = useRecordsStore();

    const {
        startUiOpenDialogDelete,
        startUiOpenRecordModal
    } = useUiStore();


    const handleAllRecords = () => {

        startUiOpenDialogDelete()
    }

    const handleOpenRecord = () => {

        startUiOpenRecordModal();
    }

    return (
        <>
            {
                (pathname === '/regist' && activeRecord)
                &&
                <List>

                    <ListItem button onClick={handleOpenRecord}>
                        <ListItemIcon>
                            <VisibilityIcon sx={{
                                ml: '10%'
                            }} />
                        </ListItemIcon>

                        <ListItemText primary="View" />

                    </ListItem>

                </List>
            }
        </>
    )
}
