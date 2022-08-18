import * as React from 'react';
import {
    useLocation,
    useNavigate
} from "react-router-dom";

import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import {
    useAuthStore,
    useBinStore,
    useProductsStore,
    useUiStore,
    useUsersStore
} from '../../../hooks';

import {
    AppBar,
    Drawer,
    DrawerHeader,
    navigationMenu
} from '../../../styles/components/ui';


export const NavigationMenu = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { role } = useAuthStore();

    const { activeUser } = useUsersStore();
    const { activeProduct } = useProductsStore();

    const {
        activeBinUser,
        activeBinProduct,
        productBinStartEnable,
        userBinStartEnable,
    } = useBinStore();

    const {
        startUiOpenProductModal,
        startUiOpenProductModalEdit,
        startUiOpenUserModalAdd,
        startUiOpenUserModalEdit,
        startUiOpenDialogDelete
    } = useUiStore();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOpenMenuBin = Boolean(anchorEl);
    const [open, setOpen] = React.useState(false);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleAddButton = () => {

        switch (pathname) {
            case '/dashboard/products':
                startUiOpenProductModal()
                break;

            case '/dashboard/users':
                startUiOpenUserModalAdd()
                break;


            default:
                break;
        }

    }

    const handleEditButton = () => {

        switch (pathname) {
            case '/dashboard/products':
                startUiOpenProductModalEdit()
                break;

            case '/dashboard/users':
                startUiOpenUserModalEdit()
                break;


            default:
                break;
        }

    }

    const handleDeleteButton = () => {

        switch (pathname) {

            case '/dashboard/products':
                startUiOpenDialogDelete()
                break;

            case '/dashboard/users':
                startUiOpenDialogDelete()
                break;


            default:
                break;
        }

    }

    const handleBinEnable = () => {
        switch (pathname) {

            case '/dashboard/bin/products':
                productBinStartEnable(activeBinProduct)
                break;

            case '/dashboard/bin/users':
                userBinStartEnable(activeBinUser)
                break;


            default:
                break;
        }
    }

    const handleBinDelete = () => {
        switch (pathname) {

            case '/dashboard/bin/products':
                startUiOpenDialogDelete()
                break;

            case '/dashboard/bin/users':
                startUiOpenDialogDelete()
                break;


            default:
                break;
        }
    }

    const handleAllRecords = () => {

        startUiOpenDialogDelete()
    }


    const handleClick = (event) => {

        if (!!anchorEl) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Box sx={navigationMenu(sm, md, lg, xl)}>

                <Drawer variant="permanent" open={open}>

                    {/* <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader> */}

                    <Divider />

                    <Toolbar>

                        <IconButton
                            id='homeIconButton'
                            color="inherit"
                            edge="start"
                            onClick={() => navigate('/')}
                        >
                            <HomeIcon />

                        </IconButton>


                    </Toolbar>

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

                        {
                            (role === 'ADMIN_ROLE')
                            &&
                            <ListItem button onClick={handleClick}>
                                <ListItemIcon>
                                    <AutoDeleteIcon sx={{
                                        ml: '10%'
                                    }} />
                                </ListItemIcon>

                                <ListItemText primary="Papelera" />

                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={handleOpenMenuBin}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <MenuItem onClick={() => navigate('/bin/products')} >Productos</MenuItem>
                                    <MenuItem onClick={() => navigate('/bin/users')} >Usuarios</MenuItem>
                                </Menu>

                            </ListItem>
                        }

                    </List>
                    <Divider />

                    {
                        (pathname === '/products' || pathname === '/users')
                        &&
                        <List>

                            <ListItem button onClick={handleAddButton}>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>

                                <ListItemText primary="Crear" />

                            </ListItem>

                        </List>
                    }


                    {
                        (pathname === '/dashboard/regist')
                        &&
                        <>
                            {
                                (1 == 1)
                                &&
                                <List>

                                    <ListItem button onClick={handleAllRecords}>
                                        <ListItemIcon>
                                            <DeleteForeverIcon />
                                        </ListItemIcon>

                                        <ListItemText primary="Eliminar todos los registros" />

                                    </ListItem>

                                </List>
                            }
                        </>
                    }

                </Drawer>


            </Box>
        </>
    );
}
