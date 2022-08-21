import React from 'react';
import { useLocation } from 'react-router';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {
    useBinStore,
    useProductsStore,
    useRecordsStore,
    useUsersStore,
    useUiStore
} from '../../../hooks';


export const DialogDelete = () => {

    const { pathname } = useLocation();

    const { dialogDelete: dialogDeleteStatus, startUiCloseDialogDelete } = useUiStore();

    const { activeProduct, productStartDeleted } = useProductsStore();
    const { activeUser, userStartDeleted } = useUsersStore();

    const { startDeleteRecords } = useRecordsStore();

    const {
        activeBinProduct,
        activeBinUser,
        productBinStartDeleted,
        userBinStartDeleted,
    } = useBinStore();


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    const handleClose = () => {
        startUiCloseDialogDelete();
    };

    const handleDelete = () => {
        startUiCloseDialogDelete();
        switch (pathname) {

            case '/dashboard/products':
                productStartDeleted(activeProduct)
                break;

            case '/dashboard/users':
                userStartDeleted(activeUser)
                break;

            case '/dashboard/bin/products':
                productBinStartDeleted(activeBinProduct)
                break;

            case '/dashboard/bin/users':
                userBinStartDeleted(activeBinUser)
                break;

            case '/dashboard/regist':
                startDeleteRecords()
                break;


            default:
                productStartDeleted(activeProduct)
                break;
        }

    }

    return (
        <div>
            <Dialog
                open={dialogDeleteStatus}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Advertencia!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Está seguro que desea realizar esta acción?
                        Podria ser irreversible
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        No
                    </Button>
                    <Button autoFocus onClick={handleDelete}>
                        Si
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
