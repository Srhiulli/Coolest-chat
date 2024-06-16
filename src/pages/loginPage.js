import React, { useState } from 'react';
import {supabase} from '../services/supabaseClient'; 
import '../styles/loginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            error ? setError(error.message) : alert("Login successful!");
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        }
    };

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
                        onChange={(e) => setEmail(e.target.value)} // Corrigido para atualizar o estado
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password" // Adicionado um ID para o campo senha
                        placeholder='Password'
                        value={password}
                        data-cy="input-lg-password"
                        autoComplete='password'
                        onChange={(e) => setPassword(e.target.value)} // Corrigido para atualizar o estado
                        required
                    />
                </div>
                <p>Forgot password?</p>
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>

            <div className='loginElements'>
                <h1>Welcome to</h1>
                <h3>the coolest chat portal</h3>
                <p>Login to connect with your cool community</p>
                <div className='imageLogin'></div>
            </div>
        </div>
    );
};

export default LoginPage;
