import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/HomePage/Home/Home';
import Login from './components/LoginPage/Login/Login';
import PrivateRoute from './components/LoginPage/PrivateRoute/PrivateRoute';
import NotFound from './components/Shared/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const email = sessionStorage.getItem('email');
  const displayName = sessionStorage.getItem('displayName');
  const photoURL = sessionStorage.getItem('photoURL');
  const [loggedUser, setLoggedUser] = useState({
    email: email,
    displayName: displayName,
    photoURL: photoURL
  });

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router >
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
