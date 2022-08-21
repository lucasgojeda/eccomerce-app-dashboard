import React, { forwardRef } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useUiStore } from '../../../hooks';

import '../../../styles/components/ui/alerts/_errorAlert.scss';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const ErrorAlert = () => {

    const { errorAlert: errorAlertStatus, startUiCloseErrorAlert } = useUiStore();

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        startUiCloseErrorAlert()
    };


    return (
        <Snackbar
            className='mainErrorAlertContainer'
            open={errorAlertStatus.status} autoHideDuration={6000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="error">
                {errorAlertStatus.title}
            </Alert>
        </Snackbar>
    );
};