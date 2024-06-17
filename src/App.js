import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
// import ChatPage from './pages/ChatPage';
// import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
