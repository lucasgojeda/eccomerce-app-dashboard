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

import { useAuthStore } from '../../../hooks';

import { dialogLogout } from '../../../styles/components/ui';


export const DialogLogout = ({ dialogLogoutOpen, setDialogLogoutOpen }) => {

    const { startLogout } = useAuthStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const handleLogout = () => {

        setDialogLogoutOpen(false);
        startLogout();
    };

    const handleClose = () => {
        setDialogLogoutOpen(false);
    };


    return (
        <Dialog
            sx={dialogLogout(sm, md, lg, xl)}
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
