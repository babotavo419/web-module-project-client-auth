import React from "react";
import { Link } from "react-router-dom";
import Logout from './Logout';

const NavBar = () => {
  return (
    <nav>
      <h2>Friends DataBase</h2>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link to="/login">Home</Link>
          </li>
            <li>
              <Link to="/friends">Friends List</Link>
            </li>
            <li>
              <Link to="/friends/add">Add Friend</Link>
            </li>
            <li>
              <Logout />
            </li>
      </ul>
    </nav>
  );
};

export default NavBar;


