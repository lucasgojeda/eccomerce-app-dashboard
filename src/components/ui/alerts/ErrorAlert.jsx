import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uiCloseErrorAlert } from '../../../../store/slices/uiSlice';

import { styles__errorAlert } from '../../../../styles/dashboard/ui/alerts/styles__errorAlert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const ErrorAlert = () => {

    const dispatch = useDispatch();

    const { errorAlert } = useSelector( state => state.ui );

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch( uiCloseErrorAlert() )
    };


    return (
            <Snackbar 
            sx={styles__errorAlert(sm, md, lg, xl)}
            open={errorAlert.status} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error">
                    { errorAlert.title }
                </Alert>
            </Snackbar>
    );
};