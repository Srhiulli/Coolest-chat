import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
// import '../styles/signupPage.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        setError(null);

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                setError(error.message);
            } else {
                alert("Sign up successful!");
                // Redirecionar ou fazer outras ações após o cadastro
            }
        } catch (error) {
            setError(error.message || 'An unexpected error occurred.');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSignUp} className="signup-form">
                <h1>Sign Up</h1>
                <h3>Create your account</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default SignUpPage;
