import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import '../styles/signupPage.css';
import '../styles/Button.css';
import LoginWithGoogle from '../components/Auth/LoginWithGoogle';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // NOTE: mover para outro lugar
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            if (sessionError) throw sessionError;

            if (sessionData?.session?.user) {
                console.log('Usuário já está logado:', sessionData.session.user);
                navigate('/chat'); // Redireciona para /chat se o usuário já estiver logado
                return;
            }

            // Tentativa de inscrição com email e senha
            const { data, error: signUpError } = await supabase.auth.signUp({
                email,
                password
            });

            if (signUpError) {
                throw signUpError; // Se ocorrer um erro, lança a exceção para ser tratada pelo catch
            }

            const user = data.user;

            if (user) {
                alert('Inscrição realizada com sucesso! Por favor, verifique seu email.');
                setEmail('');
                setPassword('');
                navigate('/chat');
            } else {
                setError('Erro ao criar conta.'); 
            }
        } catch (err) {
            setError(err.message || 'Ocorreu um erro inesperado.');
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
                <button className='btn-sumbit' type="submit">Sign Up</button>
                {error && <p className="error-message">{error}</p>}
                <LoginWithGoogle />
            </form>
        </div>
    );
};

export default SignUpPage;
