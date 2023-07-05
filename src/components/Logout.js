import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:9000/api/logout', {}, {
        headers: { Authorization: token },
      });
      // Remove the token from localStorage
      localStorage.removeItem('token');
      // Redirect to login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <Link to="#" onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default Logout;
