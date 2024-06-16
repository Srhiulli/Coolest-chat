import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { supabase } from '../../services/supabaseClient';
import '../styles/loginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleLogin = () => {
        // supabase.auth.signin({email, password})
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    }

    return (
        <div className="wrapper">

            <form onSubmit={handleLogin} className="login-form">
                <h1>Login</h1>
                <h3>Enter your account details</h3>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        value={email}
                        data-cy="input-lg-email"
                        autoComplete='email'
                        required
                        input />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        data-cy="input-lg-password"
                        autoComplete='password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        input />
                </div>
                <p>Forgot password?</p>
                <button type="submit">Login</button>
            </form>

            <div className='loginElements'>
            <h1>Welcome to</h1>
            <h3>the coolest chat portal</h3>
            <p>Login to connect with your cool community</p>
            <div className='imageLogin'></div>
            </div>
        </div>
    )
}
export default LoginPage;
