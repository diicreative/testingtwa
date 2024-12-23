'use client';

import { useState, useEffect } from 'react';

type UserInfo = {
  username: string;
  isPremium: boolean;
} | null;

export default function WalletPage() {
  const [userInfo, setUserInfo] = useState<UserInfo>(null);

  // Use a valid chatId (replace with actual bot username or user/group ID)
  const chatId = '@prodocks_bot'; // Make sure this is correct!

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        console.log('Sending chatId:', chatId); // Log the chatId sent to the API

        const response = await fetch('/api/telegram/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ chatId }),
        });

        const data = await response.json();
        console.log('Received data:', data); // Log the response from the server

        if (response.ok) {
          setUserInfo(data);
        } else {
          alert(data.error || 'Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        alert('Error fetching user info.');
      }
    };

    if (chatId) {
      fetchUserInfo();
    }
  }, [chatId]);

  return (
    <div>
      <h1>Telegram User Info</h1>

      {userInfo ? (
        <div>
          <h2>User Info:</h2>
          <p>Username: {userInfo.username}</p>
          <p>Premium Status: {userInfo.isPremium ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>No user info available</p>
      )}
    </div>
  );
}
