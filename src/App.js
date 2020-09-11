import React from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';

function App() {

  // BEM convention
  return (
    <div className="app">
      {/* <h1>Amazon clone</h1> */}
      {/* header */}
      <Header />

      {/* home */}
      <Home />
    </div>
  );
}

export default App;
