import React from 'react';
import { useNavigate } from 'react-router';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';

import { useAuthStore } from '../../../../hooks';


export const BinNavigationMenu = () => {

    const navigate = useNavigate();

    const { role } = useAuthStore();

    return (
        <>
            {
                (role === 'ADMIN_ROLE')
                &&
                <List sx={{
                    position: 'absolute',
                    bottom: 0,
                }}>

                    <Divider />


                    <ListItem>
                        <ListItemIcon>
                            <DeleteIcon
                                color='error'
                                sx={{
                                    ml: '10%',
                                }} />
                        </ListItemIcon>

                        <ListItemText primary="Trash" />

                    </ListItem>

                    <Divider />

                    <ListItem button onClick={() => navigate('/bin/products')}>
                        <ListItemIcon>
                            <InventoryIcon
                                sx={{
                                    ml: '10%',
                                }} />
                        </ListItemIcon>

                        <ListItemText primary="Products" />

                    </ListItem>

                    <ListItem button onClick={() => navigate('/bin/users')}>
                        <ListItemIcon>
                            <GroupIcon
                                sx={{
                                    ml: '10%',
                                }} />
                        </ListItemIcon>

                        <ListItemText primary="Users" />

                    </ListItem>

                </List>
            }

        </>
    )
}
