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
} from '../../../styles/components/ui';

import '../../../styles/components/ui/navbar/_navigationMenu.scss';


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

    const handleBinEnable = () => {
        switch (pathname) {

            case '/bin/products':
                productBinStartEnable(activeBinProduct)
                break;

            case '/bin/users':
                userBinStartEnable(activeBinUser)
                break;


            default:
                break;
        }
    }

    const handleBinDelete = () => {
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

            <Box className='mainNavigationMenuContainer'>

                <Drawer variant="permanent" open={open}>


                    <Toolbar>

                        <IconButton
                            id='homeIconButton'
                            color="primary"
                            edge="start"
                            onClick={() => navigate('/')}
                        >
                            <HomeIcon />

                        </IconButton>


                    </Toolbar>

                    <Divider />

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



                    <Divider />


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

                                <ListItemText primary="Papelera" />

                            </ListItem>

                            <Divider />

                            <ListItem button onClick={() => navigate('/bin/products')}>
                                <ListItemIcon>
                                    <InventoryIcon
                                        sx={{
                                            ml: '10%',
                                        }} />
                                </ListItemIcon>

                                <ListItemText primary="Productos" />

                            </ListItem>

                            <ListItem button onClick={() => navigate('/bin/users')}>
                                <ListItemIcon>
                                    <GroupIcon
                                        sx={{
                                            ml: '10%',
                                        }} />
                                </ListItemIcon>

                                <ListItemText primary="Usuarios" />

                            </ListItem>

                        </List>
                    }

                </Drawer>


            </Box>
        </>
    );
}
