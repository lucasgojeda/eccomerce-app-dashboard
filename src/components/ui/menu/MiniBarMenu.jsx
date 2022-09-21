import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { EditionItems } from './items/EditionItems';
import { BinEditionItems } from './items/BinEditionItems';

import {
    useBinStore,
    useProductsStore,
    useUiStore,
    useUsersStore
} from '../../../hooks';

import '../../../styles/components/ui/menu/_miniBarMenu.scss';

const rutasActivas = [
    '/products',
    '/users',
    '/bin/products',
    '/bin/users',
]

export const MiniBarMenu = () => {

    const [statusMenu, setStatusMenu] = useState(false);

    const { pathname } = useLocation();

    const { activeUser } = useUsersStore();
    const { activeProduct } = useProductsStore();
    const {
        activeBinProduct,
        activeBinUser,
        // productBinStartEnable,
        // userBinStartEnable,
    } = useBinStore();


    useEffect(() => {


        switch (pathname) {
            case rutasActivas[0]:
                return (!activeProduct) ? setStatusMenu(false) : setStatusMenu(true);

            case rutasActivas[1]:
                return (!activeUser) ? setStatusMenu(false) : setStatusMenu(true);

            case rutasActivas[2]:
                return (!activeBinProduct) ? setStatusMenu(false) : setStatusMenu(true);

            case rutasActivas[3]:
                return (!activeBinUser) ? setStatusMenu(false) : setStatusMenu(true);

            default:
                break;
        }


    }, [activeProduct, activeUser, activeBinProduct, activeBinUser])



    const evaluationVisibility = () => {

        switch (pathname) {
            case rutasActivas[2]:
                return (activeBinProduct)  ? 'visible' : 'hidden';

            case rutasActivas[3]:
                return (activeBinUser) ? 'visible' : 'hidden';

            default:
                return 'visible';
        }
    }


    const {
        startUiOpenProductModal,
        startUiOpenProductModalEdit,
        startUiOpenUserModalAdd,
        startUiOpenUserModalEdit,
        startUiOpenDialogDelete
    } = useUiStore();

    const handleOpenMenu = () => {

        if (!statusMenu) {

            setStatusMenu(true);
        } else {

            setStatusMenu(false)
        }
    }

    return (
        <>
            {
                (rutasActivas.includes(pathname))
                &&
                <div className='mainContainerMiniBarMenu'
                    style={{
                        width: (!statusMenu) && '0',
                        transition: 'all 0.5s ease-out',
                        visibility: evaluationVisibility()
                    }}>

                    <div
                        onClick={handleOpenMenu}
                        className='arrowContainer'>

                        {
                            (statusMenu)
                                ?
                                <ArrowForwardIosIcon />
                                :
                                <ArrowBackIosNewIcon />
                        }

                    </div>

                    <div className='secondaryContainerMiniBarMenu'>

                        {
                            (pathname === rutasActivas[0] || pathname === rutasActivas[1])
                            &&
                            <EditionItems />
                        }

                        {
                            (pathname === rutasActivas[2] || pathname === rutasActivas[3])
                            &&
                            <BinEditionItems />
                        }

                    </div>

                </div>
            }
        </>
    )
}
