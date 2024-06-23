import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import '../styles/loginPage.css';
import '../styles/Button.css';
import LoginWithGoogle from '../components/Auth/LoginWithGoogle';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Verifica se já existe um usuário autenticado
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            if (sessionError) throw sessionError;

            if (sessionData?.session?.user) {
                console.log('Usuário já está logado:', sessionData.session.user);
                navigate('/chat'); // Redireciona para /chat se o usuário já estiver logado
                return;
            }

            // Tentativa de login com email e senha
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (signInError) {
                alert('Crie uma conta');
            }

            const user = data.user;

            if (user) {
                alert('Login realizado com sucesso!');
                setEmail('');
                setPassword('');
                navigate('/chat'); // Redireciona para /chat após o login
            } else {
                setError('Credenciais inválidas.'); // Mensagem genérica para falhas
            }
        } catch (err) {
            setError(err.message || 'Ocorreu um erro inesperado.');
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
                <button className='btn-sumbit' type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
                <LoginWithGoogle />
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
