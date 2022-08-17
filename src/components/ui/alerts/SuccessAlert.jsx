import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { uiCloseSuccessAlert } from '../../../store/slices/uiSlice';

import { styles__successAlert } from '../../../styles/dashboard/ui/alerts/styles__successAlert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const SuccessAlert = () => {

    const dispatch = useDispatch();

    const { successAlert } = useSelector(state => state.ui);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(uiCloseSuccessAlert())
    };


    return (
        <Snackbar 
        sx={styles__successAlert(sm, md, lg, xl)}
        open={successAlert.status} autoHideDuration={3000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="success">
                {successAlert.title}
            </Alert>
        </Snackbar>
    );
};