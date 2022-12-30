import React from 'react'
import { useLocation } from 'react-router';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    useProductsStore,
    useUiStore,
    useUsersStore
} from '../../../../hooks';

export const EditionItems = () => {

    const { pathname } = useLocation();

    const { activeUser } = useUsersStore();
    const { activeProduct } = useProductsStore();

    const {
        startUiOpenProductModal,
        startUiOpenProductModalEdit,
        startUiOpenUserModalAdd,
        startUiOpenUserModalEdit,
        startUiOpenDialogDelete,
    } = useUiStore();


    const handleAddButton = () => {

        switch (pathname) {
            case '/products':
                startUiOpenProductModal()
                break;

            case '/users':
                startUiOpenUserModalAdd()
                break;


            default:
                break;
        }

    }

    const handleEditButton = () => {

        switch (pathname) {
            case '/products':
                startUiOpenProductModalEdit()
                break;

            case '/users':
                startUiOpenUserModalEdit()
                break;


            default:
                break;
        }

    }

    const handleDeleteButton = () => {

        switch (pathname) {

            case '/products':
                startUiOpenDialogDelete()
                break;

            case '/users':
                startUiOpenDialogDelete()
                break;


            default:
                break;
        }

    }

    return (
        <>
            {
                (pathname === '/products' || pathname === '/users')
                &&
                <List>

                    <ListItem button onClick={handleAddButton}>
                        <ListItemIcon>
                            <AddIcon sx={{
                                ml: '10%'
                            }} />
                        </ListItemIcon>

                        <ListItemText primary="Create" />

                    </ListItem>



                    {
                        (activeProduct || activeUser)
                        &&
                        <>
                            <ListItem button onClick={handleEditButton}>
                                <ListItemIcon>
                                    <EditIcon sx={{
                                        ml: '10%'
                                    }} />
                                </ListItemIcon>

                                <ListItemText primary="Edit" />

                            </ListItem>

                            <ListItem button onClick={handleDeleteButton}>
                                <ListItemIcon>
                                    <DeleteIcon sx={{
                                        ml: '10%'
                                    }} />
                                </ListItemIcon>

                                <ListItemText primary="Remove" />

                            </ListItem>
                        </>
                    }

                </List>
            }

        </>
    )
}
