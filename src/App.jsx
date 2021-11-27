import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
