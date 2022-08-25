import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { NavigationMenu } from './NavigationMenu';
import { NavigationMenuMovil } from './NavigationMenuMovil';
import { MiniBarMenu } from '../menu/MiniBarMenu';


export const NavbarDashboard = () => { 

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {
                (smDown)
                    ?
                    <>
                    <MiniBarMenu />
                    <NavigationMenuMovil />
                    </>
                    :
                    <NavigationMenu /> 
            }
        </>
    );
};