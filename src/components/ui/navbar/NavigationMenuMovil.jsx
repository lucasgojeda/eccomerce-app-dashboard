import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    uiOpenProductModal,
    uiOpenProductModalEdit,
    uiOpenUserModalAdd,
    uiOpenUserModalEdit,
    uiOpenDialogDelete
} from '../../../../store/slices/uiSlice';
import {
    productBinStartEnable,
    userBinStartEnable
} from '../../../../store/thunks/Bin';

import { styles__navigationMenuMovil } from '../../../../styles/dashboard/ui/navbar/styles__navigationMenuMovil';


export const NavigationMenuMovil = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();


    const { activeUser } = useSelector(state => state.users);
    const { activeProduct } = useSelector(state => state.product);

    const { activeBinUser } = useSelector(state => state.bin);
    const { activeBinProduct } = useSelector(state => state.bin);


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
            case '/dashboard/products':
                dispatch(uiOpenProductModal())
                break;

            case '/dashboard/users':
                dispatch(uiOpenUserModalAdd())
                break;


            default:
                break;
        }

    }

    const handleEditButton = () => {

        switch (pathname) {
            case '/dashboard/products':
                dispatch(uiOpenProductModalEdit())
                break;

            case '/dashboard/users':
                dispatch(uiOpenUserModalEdit())
                break;


            default:
                break;
        }

    }

    const handleDeleteButton = () => {

        switch (pathname) {

            case '/dashboard/products':
                dispatch(uiOpenDialogDelete())
                break;

            case '/dashboard/users':
                dispatch(uiOpenDialogDelete())
                break;


            default:
                break;
        }

    }


    const handleBinEnable = () => {
        switch (pathname) {

            case '/dashboard/bin/products':
                dispatch(productBinStartEnable(activeBinProduct))
                break;

            case '/dashboard/bin/users':
                dispatch(userBinStartEnable(activeBinUser))
                break;


            default:
                break;
        }
    }

    const handleBinDelete = () => {
        switch (pathname) {

            case '/dashboard/bin/products':
                dispatch(uiOpenDialogDelete())
                break;

            case '/dashboard/bin/users':
                dispatch(uiOpenDialogDelete())
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
        <Box sx={styles__navigationMenuMovil(sm, md, lg, xl)}>
            <BottomNavigation
                id='buttonNavigationContainer'
                value={pathname}>


                <BottomNavigationAction
                    sx={{
                        ml: '-1%'
                    }}
                    label="Papelera"
                    value={
                        (pathname === "/dashboard/bin/users")
                            ?
                            "/dashboard/bin/users"
                            :
                            "/dashboard/bin/products"
                    }
                    icon={<AutoDeleteIcon />}
                    onClick={handleBinMenu}
                />


                <BottomNavigationAction
                    label="Sales"
                    value="/dashboard/sales"
                    icon={<TrendingUpIcon />}
                    onClick={() => navigate('/dashboard/sales')}
                />

                <BottomNavigationAction
                    label="Dashboard"
                    value="/dashboard"
                    icon={<DashboardIcon />}
                    onClick={() => navigate('/dashboard')}
                />


                <BottomNavigationAction
                    label="Inicio"
                    value="/"
                    icon={<HomeIcon />}
                    onClick={() => navigate('/')}
                />


                <BottomNavigationAction
                    sx={{
                        mr: '-2%'
                    }}
                    label="Menu"
                    value=""
                    icon={<MoreVertIcon />}
                    onClick={handleIconsMenu}
                />


                {
                    (iconsMenu)
                    &&
                    <Box id='containerSubMenu'>

                        <IconButton aria-label="Usuarios" onClick={() => navigate('/dashboard/users')}>
                            <GroupIcon />
                        </IconButton>


                        <IconButton aria-label="Registros" onClick={() => navigate('/dashboard/regist')}>
                            <LibraryBooksIcon />
                        </IconButton>

                        <IconButton aria-label="Productos" onClick={() => navigate('/dashboard/products')}>
                            <InventoryIcon />
                        </IconButton>

                    </Box>
                }

                {
                    (iconsBinMenu)
                    &&
                    <Box id='containerSubMenuBin'>

                        <IconButton aria-label="Usuarios" onClick={() => navigate('/dashboard/bin/users')}>
                            <GroupIcon />
                        </IconButton>

                        <IconButton aria-label="Productos" onClick={() => navigate('/dashboard/bin/products')}>
                            <InventoryIcon />
                        </IconButton>

                    </Box>
                }


            </BottomNavigation>
        </Box>
    );
}
