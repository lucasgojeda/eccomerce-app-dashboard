import * as React from 'react';
import { useNavigate } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { Drawer } from '../../../styles/components/ui';

import { NavigationItems } from './items/NavigationItems';
import { EditionItems } from './items/EditionItems';
import { RecordItems } from './items/RecordItems';
import { BinNavigationMenu } from './items/BinNavigationMenu';
import { BinEditionItems } from './items/BinEditionItems';

import '../../../styles/components/ui/navbar/_navigationMenu.scss';


export const NavigationMenu = () => {

    const navigate = useNavigate();

    return (
        <Box className='mainNavigationMenuContainer'>

            <Drawer variant="permanent">


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

                {
                    /**
                     * Items de la navegación
                     */
                }
                <NavigationItems />

                <Divider />


                {
                    /**
                     * Items de edición en productos y usuarios
                     */
                }
                <EditionItems />

                {
                    /**
                     * Items de edición en productos y usuarios en
                     * la papelera
                     */
                }
                <BinEditionItems />

                {
                    /**
                     * Items de los registros
                     */
                }
                <RecordItems />


                <Divider />
                {
                    /**
                     * Items de navegación de la papelera
                     */
                }
                <BinNavigationMenu />


            </Drawer>


        </Box>
    );
}
