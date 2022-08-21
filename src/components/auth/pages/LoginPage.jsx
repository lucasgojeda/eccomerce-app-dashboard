import React from 'react';
import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

import { useAuthStore, useForm } from '../../../hooks';

import '../../../styles/components/auth/pages/_loginPage.scss';


export const LoginPage = () => {

    const navigate = useNavigate();

    const { StartLogin } = useAuthStore();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: '',
        lPassword: ''

    });

    const { lEmail, lPassword } = formLoginValues;

    const handleModLogin = (e) => {
        e.preventDefault();

        StartLogin('moderator_test@test.com', '1234567');

    }

    const handleAdminLogin = (e) => {
        e.preventDefault();

        StartLogin('admin_test@test.com', '123456');

    }

    const handleLogin = (e) => {
        e.preventDefault();

        StartLogin(lEmail, lPassword);

    }



    return (
        <Container className='mainLoginContainer'>

            <Box
                id='loginContainer'
                component="form"
                noValidate
                autoComplete="off"
            >

                <Typography fontSize={20} id='title' variant="body2" color="text.primary">
                    Iniciar sesión
                </Typography>

                <Container id='container'>

                    <div>

                        <TextField
                            required
                            variant='outlined'
                            label="Email"
                            name='lEmail'
                            value={lEmail}
                            onChange={handleLoginInputChange}
                        />

                        <TextField
                            required
                            variant='outlined'
                            label="Contraseña"
                            name='lPassword'
                            value={lPassword}
                            onChange={handleLoginInputChange}
                        />

                    </div>
                </Container>


                <div id='ingresarButtonContainer'>
                    <Container>
                        <button
                            type="submit"
                            id="submitButton"
                            onClick={handleLogin}
                            className="custom-btn btn-5">
                            <span>Ingresar</span>
                        </button>
                    </Container>
                </div>

                <Container id='fastLoginRoles'>
                    <h1>Ingreso rapido (demostración de roles)</h1>
                    <Button className='button offset' id="moderator" onClick={handleModLogin}>moderador</Button>
                    <Button className='button offset' id="admin" onClick={handleAdminLogin}>admin</Button>
                </Container>
            </Box>

        </Container >
    )
}

