'use client';

import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { MdAccountCircle } from "react-icons/md";

interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    is_premium?: boolean;
    photo_url?: string;
  }

export default function UsersPicture() {
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
            <div className="flex flex-col items-center">
              {userData.photo_url ? (
                <img
                  src={userData.photo_url}
                  alt={`${userData.first_name}'s profile`}
                  className="rounded-full w-10 h-10 object-cover bg-slate-300"
                />
              ) : (
                <div className="text-3xl text-gray-400 bg-slate-300 rounded-full"><MdAccountCircle />
                </div>
              )}
            </div>
          </>
        ) : (
            <div className="text-3xl text-gray-400 bg-slate-300 rounded-full"><MdAccountCircle />
          </div>
        )}
      </main>
    );
  }