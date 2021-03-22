import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Componanents/Header/Header';
import Home from './Componanents/Home/Home';
import Ride from './Componanents/Ride/Ride';
import Login from './Componanents/Login/Login';
import PraviteRoute from './Componanents/PraviteRoute/PraviteRoute';
import images from './Componanents/images/Bg.png';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
      <p>Name: {loggedInUser.name}</p>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PraviteRoute path="/ride/:name">
              <Ride />
            </PraviteRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
