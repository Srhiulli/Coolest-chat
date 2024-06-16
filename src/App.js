import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/loginPage';
// import SignUpPage from './pages/SignUpPage';
// import ChatPage from './pages/ChatPage';
// import PrivateRoute from './components/Auth/PrivateRoute';
// import './styles/App.css';

const App = () => {
  return (
    // <Router>
    //   <AuthProvider>
    //     <Switch>
      <LoginPage />
          // <Route path="/login" component={LoginPage} />
    //       <Route path="/signup" component={SignUpPage} />
    //       <PrivateRoute path="/chat" component={ChatPage} />
    //       <Route path="/" component={LoginPage} />
    //     </Switch>
    //   </AuthProvider>
    // </Router>
  );
};

export default App;
