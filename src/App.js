import React, { useEffect } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const promise = loadStripe('pk_test_51HREWkJliABagtgoS1BwjJ2fTCoUU9j3baCiPlkgtnvlACLqurvQQTOZgV6246zumYY8Rson3SWdAOPl9QSRhyG300tXRZ3Hrb');

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

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
