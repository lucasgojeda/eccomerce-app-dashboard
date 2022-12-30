import React, { useState } from 'react';
import {
    useLocation,
    useNavigate
} from "react-router-dom";


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

import {
    useAuthStore,
    useBinStore,
    useProductsStore,
    useUiStore,
    useUsersStore
} from '../../../hooks';

import '../../../styles/components/ui/navbar/_navigationMenuMovil.scss';


export const NavigationMenuMovil = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();


    const { role } = useAuthStore();
    const { activeUser } = useUsersStore();
    const { activeProduct } = useProductsStore();

    const {
        activeBinProduct,
        activeBinUser,
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


    const [iconsMenu, setIconsMenu] = useState(false);
    const [iconsBinMenu, setIconsBinMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorHome, setAnchorHome] = useState(null);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleBinMenu = () => {

        if (iconsBinMenu) {

            setIconsBinMenu(false)
        } else {

            setIconsBinMenu(true)
            setIconsMenu(false)
        }
    }

    const handleIconsMenu = () => {

        if (iconsMenu) {

            setIconsMenu(false)
        } else {

            setIconsMenu(true)
            setIconsBinMenu(false)
        }
    }


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



    const handleOpenMenuBin = Boolean(anchorEl);
    const handleOpenMenuHome = Boolean(anchorHome);

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

    const handleClickHome = (event) => {

        if (!!anchorHome) {
            setAnchorHome(null);
        } else {
            setAnchorHome(event.currentTarget);
        }
    };

    const handleCloseHome = () => {
        setAnchorHome(null);
    };

    return (
        <Box className='mainMenuMovilContainer'>
            <BottomNavigation
                id='buttonNavigationContainer'
                value={pathname}>


                {
                    (role === 'ADMIN_ROLE')
                    &&
                    <BottomNavigationAction
                        sx={{
                            ml: '-1%'
                        }}
                        label="Trash"
                        value={
                            (pathname === "/bin/users")
                                ?
                                "/bin/users"
                                :
                                "/bin/products"
                        }
                        icon={<AutoDeleteIcon />}
                        onClick={handleBinMenu}
                    />
                }


                <BottomNavigationAction
                    label="Sales"
                    value="/sales"
                    icon={<TrendingUpIcon />}
                    onClick={() => navigate('/sales')}
                />


                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<HomeIcon />}
                    onClick={() => navigate('/')}
                />

                <BottomNavigationAction
                    label="Products"
                    value="/products"
                    icon={<InventoryIcon />}
                    onClick={() => navigate('/products')}
                />

                {
                    (role === 'ADMIN_ROLE')
                    &&
                    <BottomNavigationAction
                        sx={{
                            mr: '-2%'
                        }}
                        label="Menu"
                        value=""
                        icon={<MoreVertIcon />}
                        onClick={handleIconsMenu}
                    />
                }


                {
                    (iconsMenu && role === 'ADMIN_ROLE')
                    &&
                    <Box id='containerSubMenu'>

                        <IconButton aria-label="Users" onClick={() => navigate('/users')}>
                            <GroupIcon />
                        </IconButton>


                        <IconButton aria-label="Recors" onClick={() => navigate('/regist')}>
                            <LibraryBooksIcon />
                        </IconButton>


                    </Box>
                }

                {
                    (iconsBinMenu && role === 'ADMIN_ROLE')
                    &&
                    <Box id='containerSubMenuBin'>

                        <IconButton aria-label="Users" onClick={() => navigate('/bin/users')}>
                            <GroupIcon />
                        </IconButton>

                        <IconButton aria-label="Products" onClick={() => navigate('/bin/products')}>
                            <InventoryIcon />
                        </IconButton>

                    </Box>
                }


            </BottomNavigation>
        </Box>
    );
}
