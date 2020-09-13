import React, { useEffect } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('user is >>>', authUser);

      if (authUser) {
        //  user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // User logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  // BEM convention
  return (


    <div className="app">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/Checkout'>
            <Header />
            <Checkout />

          </Route>

          <Route path='/'>
            <Header />
            <Home />


          </Route>

        </Switch>
      </Router>
    </div>


  );
}

export default App;
