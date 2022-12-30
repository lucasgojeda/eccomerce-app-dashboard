import React, { useEffect, useState } from 'react';

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

import { useUiStore, useUsersStore } from '../../../hooks';

import '../../../styles/components/users/modals/_userModal.scss';


const initEvent = {
    name: '',
    email: '',
    role: '',
    status: '',
    google: false,
}


export const EditUserModal = () => {

    const { 
        activeUser,
        userStartUpdated,
        startClearActiveUser
    } = useUsersStore();

    const {
        modalUserEdit,

        startUiCloseProgressBackdrop,
        startUiCloseUserModalEdit,
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
        startClearActiveUser();
        startUiCloseUserModalEdit();

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

                startUiOpenDialogFields(errors);

            } else {
                handleClose();

                startUiOpenProgressBackdrop();

                userStartUpdated(formValues);
            }

        } catch (error) {
            startUiCloseProgressBackdrop();
            startUiOpenErrorAlert('Error trying to edit the user! Talk to developer');
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
                        className='mainUserModalContainer'
                        noValidate
                        autoComplete="off"
                    >

                        <Typography variant='body2' id='title'>
                            Edit user
                        </Typography>


                        <Container id='container'>
                            <div>

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
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

                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Role"
                                        value={role}
                                        onChange={handleSelectRolesInput}
                                    >

                                        <MenuItem name='USER_ROLE' value={'USER_ROLE'}>User</MenuItem>
                                        <MenuItem name='MODERATOR_ROLE' value={'MODERATOR_ROLE'}>Moderator</MenuItem>
                                        <MenuItem name='ADMIN_ROLE' value={'ADMIN_ROLE'}>Administrator</MenuItem>

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
                            >Save</Button>

                            <Button
                                id="submitButton"
                                variant="outlined"
                                onClick={handleClose}
                            >Cancel</Button>
                        </Container>

                    </Box>
                </Container>
            </Modal>
        </div >
    );
}
