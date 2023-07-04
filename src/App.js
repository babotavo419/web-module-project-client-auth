// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import LogoutButton from './components/Logout';
import NavBar from './components/NavBar';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={isLoggedIn ? <FriendsList /> : <Navigate to="/login" />} />
        <Route path="/friends/add" element={isLoggedIn ? <AddFriend /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
