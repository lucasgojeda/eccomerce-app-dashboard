import React, { useState } from 'react';

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

import { verifyUserCreateFields } from '../../../helpers/verifyUserCreateFields';

import { useUiStore, useUsersStore } from '../../../hooks';

import '../../../styles/components/users/modals/_userModal.scss';


const initEvent = {
    name: 'Homelander',
    email: 'homelander@gmail.com',
    role: 'USER_ROLE',
    status: true,
    password: '1234567',
    google: false,
}


export const CreateUserModal = () => {

    const { userStartAddNew } = useUsersStore();
    const {
        modalUserAdd,
        startUiCloseProgressBackdrop,
        startUiCloseUserModalAdd,
        startUiOpenDialogFields,
        startUiOpenErrorAlert,
        startUiOpenProgressBackdrop
    } = useUiStore();

    const [formValues, setFormValues] = useState(initEvent);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const { name, email, role, password } = formValues;

    const handleUserInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSelectRolesInput = (e) => {

        setFormValues({
            ...formValues,
            role: e.target.value
        })

    }

    const handleClose = () => {

        setFormValues(initEvent);
        startUiCloseUserModalAdd();

    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {




            const errors = verifyUserCreateFields(formValues);


            if (errors.length >= 1) {

                startUiOpenDialogFields(errors);

            } else {

                handleClose();

                startUiOpenProgressBackdrop();

                userStartAddNew(formValues);
            }





        } catch (error) {

            startUiCloseProgressBackdrop();
            startUiOpenErrorAlert('Error trying to create the user! Talk to developer');
            console.log(error);

        }

    }

    return (



        <div>
            <Modal
                open={modalUserAdd}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth="sm">
                    <Box
                        component="form"
                        className='mainUserModalContainer'
                        noValidate
                        autoComplete="off"
                    >

                        <Typography variant='body2' id='title'>
                            Crear usuario
                        </Typography>


                        <Container id='container'>

                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    variant='outlined'
                                    label="Nombre"
                                    name='name'
                                    value={name}
                                    onChange={handleUserInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    variant='outlined'
                                    label="Email"
                                    name='email'
                                    value={email}
                                    onChange={handleUserInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    variant='outlined'
                                    label="Contraseña"
                                    name='password'
                                    value={password}
                                    onChange={handleUserInputChange}
                                />

                                <FormControl id="FormControl">

                                    <InputLabel id="demo-simple-select-label">Rol</InputLabel>

                                    <Select
                                        id="demo-simple-select"
                                        label="Role"
                                        variant='outlined'
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
