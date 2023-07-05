import React, { useState } from 'react';
import axios from 'axios';

const AddFriend = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:9000/api/friends', { name, age, email }, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error('Failed to add friend', error);
    }
  };

  return (
  <div>
    <h2>Add Friends</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
            <input
                id="age"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <button type="submit">Add Friend</button>
            </div>
        </form>
    </div>
  );
};

export default AddFriend;
