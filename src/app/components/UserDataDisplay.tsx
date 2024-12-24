'use client';

import React, { useState, useEffect } from 'react';

const UserDataDisplay = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch user data from the API route
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/telegram', { method: 'POST' });
        const data = await response.json();
        setUserData(data); // Store the fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array means it runs only once after the component mounts

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {userData.userId}</p>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Username: {userData.username}</p>
      <p>Language: {userData.languageCode}</p>
    </div>
  );
};

export default UserDataDisplay;
