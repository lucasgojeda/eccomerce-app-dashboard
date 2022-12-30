import React from 'react'
import { useLocation } from 'react-router';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import { useUiStore, useBinStore } from '../../../../hooks';


export const BinEditionItems = () => {

    const { pathname } = useLocation();

    const {
        productBinStartEnable,
        userBinStartEnable,
    } = useBinStore();

    const { startUiOpenDialogDelete } = useUiStore();

    const handleEnableButton = () => {

        switch (pathname) {
            case '/bin/products':
                productBinStartEnable()
                break;

            case '/bin/users':
                userBinStartEnable()
                break;


            default:
                break;
        }

    }

    const handleDeleteButton = () => {

        switch (pathname) {

            case '/bin/products':
                startUiOpenDialogDelete()
                break;

            case '/bin/users':
                startUiOpenDialogDelete()
                break;


            default:
                break;
        }

    }

    return (
        <div>
            <List>

                <ListItem button onClick={handleEnableButton}>
                    <ListItemIcon>
                        <ArrowCircleUpIcon sx={{
                            ml: '5%'
                        }} />
                    </ListItemIcon>

                    <ListItemText primary="Enable" />

                </ListItem>

                <ListItem button onClick={handleDeleteButton}>
                    <ListItemIcon>
                        <DeleteIcon sx={{
                            ml: '5%'
                        }} />
                    </ListItemIcon>

                    <ListItemText primary="Remove" />

                </ListItem>

            </List>
        </div>
    )
}
