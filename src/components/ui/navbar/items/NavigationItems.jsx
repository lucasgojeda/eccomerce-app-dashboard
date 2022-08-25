import React from 'react'
import { useNavigate } from 'react-router';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import { useAuthStore } from '../../../../hooks';


export const NavigationItems = () => {

    const navigate = useNavigate();

    const { role } = useAuthStore();

    return (
        <List>
            <ListItem button onClick={() => navigate('/products')}>

                <ListItemIcon>
                    <InventoryIcon sx={{
                        ml: '10%'
                    }} />
                </ListItemIcon>

                <ListItemText primary="Productos" />

            </ListItem>

            {
                (role === 'ADMIN_ROLE')
                &&
                <ListItem button onClick={() => navigate('/users')}>
                    <ListItemIcon>
                        <GroupIcon sx={{
                            ml: '10%'
                        }} />
                    </ListItemIcon>

                    <ListItemText primary="Usuarios" />

                </ListItem>
            }

            {
                (role === 'ADMIN_ROLE')
                &&
                <ListItem button onClick={() => navigate('/regist')}>
                    <ListItemIcon>
                        <LibraryBooksIcon sx={{
                            ml: '10%'
                        }} />
                    </ListItemIcon>

                    <ListItemText primary="Registro" />

                </ListItem>
            }

            <ListItem button onClick={() => navigate('/sales')}>
                <ListItemIcon>
                    <TrendingUpIcon sx={{
                        ml: '10%'
                    }} />
                </ListItemIcon>

                <ListItemText primary="Ventas" />

            </ListItem>

        </List>
    )
}
