import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useUiStore } from '../../../hooks';


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
            open={dialogFieldsStatus.status}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogContent>
                <h4>
                    {'Following fields are required:'}
                </h4>
                <br />
                {
                    (dialogFieldsStatus.status !== false)
                    &&
                    dialogFieldsStatus.errors?.map((e, i) => (

                        <DialogContentText key={i}>
                            {`• ${e.charAt(0).toUpperCase() + e.slice(1)}`}
                        </DialogContentText>
                    ))
                }
            </DialogContent>
        </Dialog>
    );
}
