'use client';

import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk'; // Ensure this is only accessed on the client

// Define the interface for user data
interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export default function WalletPage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== 'undefined' && WebApp?.initDataUnsafe?.user) {
      const user = WebApp.initDataUnsafe.user;
      setUserData({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        is_premium: user.is_premium,
        photo_url: user.photo_url, // Ensure photo_url is included
      });
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <div className="flex flex-col items-center mb-4">
            {userData.photo_url ? (
              <img
                src={userData.photo_url}
                alt={`${userData.first_name}'s profile`}
                className="rounded-full w-20 h-20 object-cover"
              />
            ) : (
              <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-gray-500">No Photo</span>
              </div>
            )}
            <h2 className="text-xl font-bold">@{userData.username || 'N/A'}</h2>
          </div>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || 'N/A'}</li>
            <li>Username: @{userData.username || 'N/A'}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
