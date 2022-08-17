import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uiCloseDialogFields } from '../../../../store/slices/uiSlice';

import { styles__dialogFields } from '../../../../styles/dashboard/ui/alerts/styles__dialogFields';


export const DialogFields = () => {

    const dispatch = useDispatch();

    const { dialogFields } = useSelector(state => state.ui);


    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleClose = () => {
        dispatch(uiCloseDialogFields());
    };


    return (
        <Dialog
            sx={styles__dialogFields(sm, md, lg, xl)}
            open={dialogFields.status}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogContent>
                <h4>
                    {'Los siguientes campos son requeridos:'}
                </h4>
                <br />
                {
                    (dialogFields.status !== false)
                    &&
                    dialogFields.errors.map(e => (

                        <DialogContentText key={e.index}>
                            {`• ${e.charAt(0).toUpperCase() + e.slice(1)}`}
                        </DialogContentText>
                    ))
                }
            </DialogContent>
        </Dialog>
    );
}
