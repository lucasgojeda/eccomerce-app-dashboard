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

import { useSalesStore } from '../../../hooks';



export const DialogBuy = ({ dialogBuyOpen, setDialogBuyOpen, cart }) => {

    const { salesStartAddNew } = useSalesStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleBuy = () => {

        salesStartAddNew(cart)
        setDialogBuyOpen(false);
    };

    const handleClose = () => {
        setDialogBuyOpen(false);
    };


    return (
        <div>
            <Dialog
                open={dialogBuyOpen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Por favor confirme su compra!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are just one step away from completing your purchase!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={handleBuy}>
                        Buy
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
