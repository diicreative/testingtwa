'use client';

import { useState, useEffect } from 'react';

type UserInfo = {
  username: string;
  isPremium: boolean;
} | null;

export default function WalletPage() {
  const [userInfo, setUserInfo] = useState<UserInfo>(null);

  // Hardcoded chatId (set this to the chatId you want to fetch)
  const chatId = '@prodocks_bot';

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/telegram/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ chatId }),
        });

        const data = await response.json();

        if (response.ok) {
          setUserInfo(data);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        alert('Error fetching user info.');
      }
    };

    if (chatId) {
      fetchUserInfo();
    }
  }, [chatId]); // Effect will run when `chatId` changes

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
