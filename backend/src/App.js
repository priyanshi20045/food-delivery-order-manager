// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import OtpVerify from './pages/OtpVerify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-otp" element={<OtpVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
