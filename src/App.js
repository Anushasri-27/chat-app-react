import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import '../src/styles/main.scss';
import {Switch  } from 'react-router';
import SignIn from './pages/SignIn';
import PrivateRoute from '../src/components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
        <PublicRoute path="/signin">
              <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
              <Home /> 
        </PrivateRoute>
    </Switch>
  );
}

export default App;
