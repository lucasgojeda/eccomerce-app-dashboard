import React, { forwardRef } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useUiStore } from '../../../hooks';

import '../../../styles/components/ui/alerts/_successAlert.scss';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const SuccessAlert = () => {

    const {
        successAlert: successAlertStatus,
        startUiCloseSuccessAlert
    } = useUiStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        startUiCloseSuccessAlert()
    };


    return (
        <Snackbar
            className='mainSuccessAlertContainer'
            open={successAlertStatus.status} autoHideDuration={3000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="success">
                {successAlertStatus.title}
            </Alert>
        </Snackbar>
    );
};