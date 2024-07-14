import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import FAQ from './components/FAQ';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
    toast.success('Login successful');
  };

  const handleSignupSuccess = () => {
    setLoggedIn(true);
    toast.success('Signup successful');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
    toast.info('Logged out successfully');
  };

  return (
    <Router>
      <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />
        <Route path="/account" element={loggedIn ? <Account /> : <Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App