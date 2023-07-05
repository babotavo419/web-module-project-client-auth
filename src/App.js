// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import NavBar from './components/NavBar';
import PrivateWrapper from './components/PrivateWrapper';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<PrivateWrapper><FriendsList /></PrivateWrapper>} />
        <Route path="/friends/add" element={<PrivateWrapper><AddFriend /></PrivateWrapper>} />
      </Routes>
    </>
  );
};

export default App;



