import React from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uiCloseDialogDelete } from '../../../../store/slices/uiSlice';
import { productStartDeleted } from '../../../../store/thunks/products';
import { userStartDeleted } from '../../../../store/thunks/users';
import { startDeleteRecords } from '../../../../store/thunks/records';
import {
    productBinStartDeleted,
    userBinStartDeleted
} from '../../../../store/thunks/Bin';

import { styles__dialogDelete } from '../../../../styles/dashboard/ui/alerts/styles__dialogDelete';


export const DialogDelete = () => {

    const dispatch = useDispatch();
    const { pathname } = useLocation();


    const { dialogDelete } = useSelector(state => state.ui);

    const { activeProduct } = useSelector(state => state.product);
    const { activeUser } = useSelector(state => state.users);

    const { activeBinProduct } = useSelector(state => state.bin);
    const { activeBinUser } = useSelector(state => state.bin);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    const handleClose = () => {
        dispatch(uiCloseDialogDelete());
    };

    const handleDelete = () => {
        dispatch(uiCloseDialogDelete());
        switch (pathname) {

            case '/dashboard/products':
                dispatch(productStartDeleted(activeProduct))
                break;

            case '/dashboard/users':
                dispatch(userStartDeleted(activeUser))
                break;

            case '/dashboard/bin/products':
                dispatch(productBinStartDeleted(activeBinProduct))
                break;

            case '/dashboard/bin/users':
                dispatch(userBinStartDeleted(activeBinUser))
                break;

            case '/dashboard/regist':
                dispatch(startDeleteRecords())
                break;


            default:
                dispatch(productStartDeleted(activeProduct))
                break;
        }

    }

    return (
        <div>
            <Dialog
                sx={styles__dialogDelete(sm, md, lg, xl)}
                open={dialogDelete}
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
