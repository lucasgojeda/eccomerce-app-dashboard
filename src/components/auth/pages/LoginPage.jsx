import React, { useState } from 'react'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import { useAuthStore, useForm } from '../../../hooks';

import { ModButton } from './buttons/ModButton';
import { AdminButton } from './buttons/AdminButton';

import '../../../styles/components/auth/pages/_loginPage.scss';


export const LoginPage = () => {

    const { StartLogin } = useAuthStore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputEmailChange = (e) => {

        setEmail(e.target.value);
    }

    const handleInputPasswordChange = (e) => {

        setPassword(e.target.value);
    }

    const handleModLogin = () => {

        setEmail('moderator_test@test.com');
        setPassword('1234567');

    }

    const handleAdminLogin = (e) => {
        e.preventDefault();

        setEmail('admin_test@test.com');
        setPassword('123456');
    }

    const handleLogin = (e) => {
        e.preventDefault();

        StartLogin(email, password);

    }

    const handleToTheEnd = () => {

        setTimeout(() => {
            
            window.scroll(0, 1000);
        }, 100);
    }

    return (
        <div className='login__Container'>

                <div className='iconLoginContainer'>
                    <img
                        src='https://res.cloudinary.com/the-kings-company/image/upload/v1663785540/dashboard-ecommerce-app/assets/3515462_rw5fkz.jpg'
                        alt=''
                    />
                </div>
                
                <div className="grid">

                    <form
                        autoComplete="off"
                        className="form login"
                    >

                        <div className="form__field">

                            <label htmlFor="login__username">
                                <svg className="icon">
                                    <PersonIcon />
                                </svg>
                                <span className="hidden">Username</span>
                            </label>

                            <input
                                id="login__username"
                                type="text"
                                className="form__input"
                                placeholder="Email"
                                autoComplete="off"
                                label="Email"
                                name='email'
                                value={email}
                                onChange={handleInputEmailChange}
                                onClick={handleToTheEnd}
                                required />

                        </div>

                        <div className="form__field">

                            <label htmlFor="login__password">
                                <svg className="icon">
                                    <LockIcon />
                                </svg>
                                <span className="hidden">Password</span>
                            </label>

                            <input
                                id="login__password"
                                type="password"
                                className="form__input"
                                placeholder="Password"
                                autoComplete="off"
                                label="Password"
                                name='password'
                                value={password}
                                onChange={handleInputPasswordChange}
                                onClick={handleToTheEnd}
                                required />

                        </div>

                        <div className="form__field">
                            <input type="submit" value="Login" onClick={handleLogin} />
                        </div>

                    </form>

                    <div className='credentialButtons'>
                        <ModButton handleModLogin={handleModLogin} />
                        <AdminButton handleAdminLogin={handleAdminLogin} />
                    </div>

                </div>


        </div>
    )
}
