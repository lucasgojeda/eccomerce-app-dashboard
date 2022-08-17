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

import { startLogout } from '../../../../store/thunks/auth';

import { styles__dialogLogout } from '../../../../styles/dashboard/ui/alerts/styles__dialogLogout';


export const DialogLogout = ({ dialogLogoutOpen, setDialogLogoutOpen }) => {

    const dispatch = useDispatch();


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const handleLogout = () => {

        setDialogLogoutOpen(false);
        dispatch(startLogout());
    };

    const handleClose = () => {
        setDialogLogoutOpen(false);
    };


    return (
        <Dialog
            sx={styles__dialogLogout(sm, md, lg, xl)}
            open={dialogLogoutOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Cerrar sesión"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Está seguro que desea cerrar sesión?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancelar
                </Button>
                <Button autoFocus onClick={handleLogout}>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
