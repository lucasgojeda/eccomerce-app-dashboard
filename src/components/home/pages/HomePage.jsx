import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';

import { CardProducts } from '../cards/CardProducts';

import { useAuthStore } from '../../../hooks';

import '../../../styles/components/home/pages/_homePage.scss';


export const HomePage = () => {

    const { startLogout } = useAuthStore();

    const handleLogout = () => {

        startLogout();
    }

    return (
        <div className='mainHomePageContainer'>

            <button
                onClick={handleLogout}
                className='custom-btn btn-5'>
                <span><LogoutIcon/>Log out</span>
            </button>

            <CardProducts />

        </div>
    );
};