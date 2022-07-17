import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Main from './components/Main'


import './styles/common.css';


// --------------------------------------------------------------------------//


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
