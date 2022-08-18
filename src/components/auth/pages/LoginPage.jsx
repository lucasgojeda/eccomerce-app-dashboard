import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { GoogleLogin } from 'react-google-login';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { Button, Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import { loginPage } from '../../../styles/components/auth';

import google_logo from '../../../assets/google_logo.png';

import { useAuthStore, useForm } from '../../../hooks';


export const LoginPage = () => {

    const navigate = useNavigate();

    const { startGoogleLogin, StartLogin } = useAuthStore();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: '',
        lPassword: ''

    });
    const { lEmail, lPassword } = formLoginValues;

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleModLogin = (e) => {
        e.preventDefault();

        StartLogin('moderator_test@test.com', '1234567');

    }
    const handleUserLogin = (e) => {
        e.preventDefault();

        StartLogin('user_test@test.com', '1234567');

    }
    const handleAdminLogin = (e) => {
        e.preventDefault();

        StartLogin('admin_test@test.com', '123456');

    }
    const handleLogin = (e) => {
        e.preventDefault();

        StartLogin(lEmail, lPassword);

    }

    const handleGoogleLogin = (response) => {
        response.preventDefault();

        const { tokenId } = response;

        startGoogleLogin(tokenId);
    }



    return (
        <Container sx={loginPage(sm, md, lg, xl)}
            maxWidth="sm">

            <IconButton
                id='buttonHome'
                size="large"
                edge="start"
                aria-label="home"
                onClick={() => navigate('/?page=1')}
            >
                <HomeIcon />
            </IconButton>

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
                        <Button
                            type="submit"
                            id="submitButton"
                            variant="outlined"
                            onClick={handleLogin}
                        >Ingresar</Button>
                    </Container>
                </div>

                <div id='loginButtonContainer'>

                    <GoogleLogin
                        clientId="263099325228-55asn431srakct5pegne7a7go6hjctq6.apps.googleusercontent.com"
                        render={renderProps => (
                            <button className='google-button' onClick={renderProps.onClick} disabled={renderProps.disabled}>Ingresar con Google<img className='google-button__icon' alt='google_logo' src={google_logo} /></button>
                        )}
                        buttonText="Login"
                        onSuccess={handleGoogleLogin}
                        onFailure={handleGoogleLogin}
                        cookiePolicy={'single_host_origin'}
                    />
                    <Link className='Link' to="/register"> No tienes una cuenta ? - Registrarse </Link>
                </div>

            </Box>
            <Container id='fastLoginRoles'>
                <h1>Ingreso rapido (demostración de roles)</h1>
                <Button className='button' id="user" onClick={handleUserLogin}>usuario</Button>
                <Button className='button' id="moderator" onClick={handleModLogin}>moderador</Button>
                <Button className='button' id="admin" onClick={handleAdminLogin}>admin</Button>
            </Container>
        </Container >
    )
}

