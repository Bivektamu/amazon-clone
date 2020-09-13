import React from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  // BEM convention
  return (


    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={Home} />

        </Switch>
      </Router>
    </div>


  );
}

export default App;
