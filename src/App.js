import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import HomePage from './pages/homePage';
import PrivateRoute from './components/Auth/PrivetaRoute';
import PublicRoute from './components/Auth/PublicRoute';
import Chat from './pages/ChatPage';
import { AuthProvider } from './contexts/AuthContext';


const App = () => {
  return (
    <Router>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>

      <Routes>
      <Route path="/" element={< PublicRoute component={HomePage} />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} />} />
        <Route path="/signup" element={<PublicRoute component={SignupPage} />} />
        <Route path="/chat" element={<PrivateRoute component={Chat} />} />
      </Routes>
    </Router>
  );
};

export default App;
