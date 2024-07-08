import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return !user ? <Component {...rest} /> : <Navigate to="/chat" />;
};

export default PublicRoute;