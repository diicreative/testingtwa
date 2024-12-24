'use client';

import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk'; 
import { FaCoins } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { MdVerified } from "react-icons/md";

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
          <div className="flex flex-col items-center pt-8">
            {userData.photo_url ? (
              <img
                src={userData.photo_url}
                alt={`${userData.first_name}'s profile`}
                className="rounded-full w-20 h-20 object-cover bg-slate-300"
              />
            ) : (
              <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-gray-500">No Photo</span>
              </div>
            )}
            <h2 className="text-xl font-bold">@{userData.username || 'N/A'}</h2>
          </div>
          <div className="flex flex-col items-center pt-8">
          <div className='pt-8 w-full'>
            <div className='bg-white rounded-xl flex flex-col px-4 w-full'>
              <div className='flex p-4 border-b justify-between items-center'>
                <div className='flex gap-3 items-center'><FaCoins className='text-orange-500' />My Balance</div> <div className='text-green-500'>$ 1,000,000</div>
              </div>
              <div className='flex p-4 border-b justify-between items-center'>
                <div className='flex gap-3 items-center'><MdVerified className='text-blue-600 text-lg' />Biolink Subscription</div> <div className=''><SlArrowRight /></div>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <div className="flex flex-col items-center pt-8">
          <div className="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center"><span className="text-gray-500">No Photo</span></div>
          <h2 className="text-xl font-bold pt-2">@UserName</h2>
          <div className='pt-8 w-full'>
            <div className='bg-white rounded-xl flex flex-col px-4 w-full'>
              <div className='flex p-4 border-b justify-between items-center'>
                <div className='flex gap-3 items-center'><FaCoins className='text-orange-500' />My Balance</div> <div className='text-green-500'>0</div>
              </div>
              <div className='flex p-4 border-b justify-between items-center'>
                <div className='flex gap-3 items-center'><MdVerified className='text-blue-600 text-lg' />Biolink Subscription</div> <div className=''><SlArrowRight /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
