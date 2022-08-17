import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { verifyUserEditFields } from '../../../helpers/verifyUserEditFields';

import { userStartUpdated } from '../../../store/thunks/users';
import { clearActiveUser } from '../../../store/slices/userSlice';
import {
    uiCloseProgressBackdrop,
    uiCloseUserModalEdit,
    uiOpenDialogFields,
    uiOpenErrorAlert,
    uiOpenProgressBackdrop
} from '../../../store/slices/uiSlice';

import { styles__userModal } from '../../../styles/dashboard/modals/styles__userModal';


const initEvent = {
    name: '',
    email: '',
    role: '',
    status: '',
    google: false,
}


export const EditUserModal = () => {

    const dispatch = useDispatch();

    const { activeUser } = useSelector(state => state.users);
    const { modalUserEdit } = useSelector(state => state.ui);

    const [formValues, setFormValues] = useState(initEvent);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));



    useEffect(() => {

        if (activeUser) {

            setFormValues(activeUser);

        } else {

            setFormValues(initEvent);
        }

    }, [activeUser, setFormValues]);



    const { name, email, role } = formValues;

    const handleUserInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleClose = () => {

        setFormValues(initEvent);
        dispatch(clearActiveUser());
        dispatch(uiCloseUserModalEdit());

    };

    const handleSelectRolesInput = (e) => {

        setFormValues({
            ...formValues,
            role: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const errors = verifyUserEditFields(formValues);


            if (errors.length >= 1) {

                dispatch(uiOpenDialogFields(errors));

            } else {
                handleClose();

                dispatch(uiOpenProgressBackdrop());

                dispatch(userStartUpdated(formValues));
            }

        } catch (error) {
            dispatch(uiCloseProgressBackdrop());
            dispatch(uiOpenErrorAlert('Error trying to edit the user! Talk to developer'));
            console.log(error);
        }




    }

    return (


        <div>


            <Modal
                open={modalUserEdit}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth="sm">
                    <Box
                        component="form"
                        sx={styles__userModal(sm, md, lg, xl)}
                        noValidate
                        autoComplete="off"
                    >

                        <Typography variant='body2' id='title'>
                            Editar usuario
                        </Typography>


                        <Container id='container'>
                            <div>

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nombre"
                                    name='name'
                                    value={name}
                                    onChange={handleUserInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    name='email'
                                    value={email}
                                    onChange={handleUserInputChange}
                                />


                                <FormControl id="FormControl">

                                    <InputLabel id="demo-simple-select-label">Rol</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Role"
                                        value={role}
                                        onChange={handleSelectRolesInput}
                                    >

                                        <MenuItem name='USER_ROLE' value={'USER_ROLE'}>Usuario</MenuItem>
                                        <MenuItem name='MODERATOR_ROLE' value={'MODERATOR_ROLE'}>Moderador</MenuItem>
                                        <MenuItem name='ADMIN_ROLE' value={'ADMIN_ROLE'}>Administrador</MenuItem>

                                    </Select>

                                </FormControl>


                            </div>
                        </Container>

                        <Container>
                            <Button
                                type="submit"
                                id="submitButton"
                                variant="contained"
                                onClick={handleSubmit}
                            >Guardar</Button>

                            <Button
                                id="submitButton"
                                variant="outlined"
                                onClick={handleClose}
                            >Cerrar</Button>
                        </Container>

                    </Box>
                </Container>
            </Modal>
        </div >
    );
}