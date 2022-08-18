import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useUiStore } from '../../../hooks';

import { dialogFields } from '../../../styles/components/ui';


export const DialogFields = () => {


    const {
        dialogFields: dialogFieldsStatus,
        startUiCloseDialogFields
    } = useUiStore();


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleClose = () => {

        startUiCloseDialogFields();
    };


    return (
        <Dialog
            sx={dialogFields(sm, md, lg, xl)}
            open={dialogFieldsStatus.status}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogContent>
                <h4>
                    {'Los siguientes campos son requeridos:'}
                </h4>
                <br />
                {
                    (dialogFieldsStatus.status !== false)
                    &&
                    dialogFieldsStatus.errors.map(e => (

                        <DialogContentText key={e.index}>
                            {`• ${e.charAt(0).toUpperCase() + e.slice(1)}`}
                        </DialogContentText>
                    ))
                }
            </DialogContent>
        </Dialog>
    );
}
