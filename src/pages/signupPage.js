import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import '../styles/signupPage.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        setError(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            alert("Sign up successful!");
            // Redirecionar ou fazer outras ações após o cadastro
        }
    };

    return (
        <div className="wrapper">
            <div className='SignupElements'>
                <h1>You are about to</h1>
                <h3>chat into coolest chat portal</h3>
                <p>Signup to connect with your cool community</p>
                <div className='imageLogin'></div>
            </div>
            <form onSubmit={handleSignUp} className="signup-form">
                <h1>Sign Up</h1>
                <h3>Create your account</h3>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        value={email}
                        data-cy="input-lg-email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        value={password}
                        data-cy="input-lg-password"
                        autoComplete='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <p>Forgot password?</p>
                <button type="submit">Sign Up</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default SignUpPage;
