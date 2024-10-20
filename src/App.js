
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CBEHome from './locations/CBEHome';

import './App.css'

const App = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CBEHome" element={<CBEHome />} />
      </Routes>
    </div>
  );
};

export default App;


