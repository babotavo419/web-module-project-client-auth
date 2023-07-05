import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:9000/api/friends', {
          headers: { Authorization: token },
        });
        setFriends(response.data);
      } catch (error) {
        console.error('Failed to fetch friends', error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div>
        <h2>FriendsList</h2>
        <ul>
            {friends.map((friend) => (
            <li key={friend.id}>{friend.name} - {friend.age} years old - contact- {friend.email}</li>
            ))}
        </ul>
    </div>
  )
  
};

export default FriendsList;
