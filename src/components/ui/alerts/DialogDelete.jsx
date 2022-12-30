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

    const {
        dialogDelete: dialogDeleteStatus,
        startUiCloseDialogDelete,
        startUiOpenErrorAlert
    } = useUiStore();

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

            case '/products':
                productStartDeleted(activeProduct);
                break;

            case '/users':
                userStartDeleted(activeUser);
                break;

            case '/bin/products':
                startUiOpenErrorAlert('La opción de eliminar definitivamente un producto está desactivada en la versión de prueba');
                break;

            case '/bin/users':
                startUiOpenErrorAlert('La opción de eliminar definitivamente un usuario está desactivada en la versión de prueba');
                break;

            case '/regist':
                startUiOpenErrorAlert('La opción eliminar todos los registros está desactivada en la versión de prueba');
                break;


            default:
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
                    {"Warning!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to perform this action?
                        Could be irreversible
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        No, I don't
                    </Button>
                    <Button autoFocus onClick={handleDelete}>
                        Yes, I do
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
