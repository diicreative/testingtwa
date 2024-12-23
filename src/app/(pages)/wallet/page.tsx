'use client'
import { useState } from 'react';

type UserInfo = {
  username: string;
  isPremium: boolean;
} | null;

export default function WalletPage() {
  const [chatId, setChatId] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>(null);

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
      alert('Error fetching user info.');
    }
  };

return (
    <div>
      <h1>Telegram User Info</h1>
      <input
        type="text"
        value={chatId}
        onChange={(e) => setChatId(e.target.value)}
        placeholder="Enter Chat ID"
      />
      <button onClick={fetchUserInfo}>Fetch User Info</button>
      {userInfo && (
        <div>
          <h2>User Info:</h2>
          <p>Username: {userInfo.username}</p>
          <p>Premium: {userInfo.isPremium ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}
