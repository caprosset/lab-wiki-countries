import React from 'react';
import './App.css';

import countriesArray from './countries.json';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Countries countriesArr={countriesArray} />
    </div>
  );
}

export default App;
