import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom"; import LoginPage from './pages/loginPage';
// import SignupPage from './pages/signupPage';
// import ChatPage from './pages/ChatPage';
// import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
<Router>
<LoginPage />
{/* 
{ <Link to='/signup'>signup</Link> }
{ <Routes> 
}
  { <Route path='/signup' element={<signupPage />} /> 
}

{ </Routes> } */}
</Router>
  );
};

export default App;
