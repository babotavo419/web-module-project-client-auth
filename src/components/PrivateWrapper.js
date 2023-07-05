// PrivateWrapper.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateWrapper = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token');

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateWrapper;
