import React, { useState } from 'react';
// import supabase from '../services/supabaseClient';
// import '../styles/signupPage.css';


const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);
    }

    try {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            alert(`Signup successful! Email: ${user.email}`);
            // Redirecionar para página de login ou fazer outras ações
        }
    } catch (error) {
        setError(error.message || 'An unexpected error occurred.');
    }
}