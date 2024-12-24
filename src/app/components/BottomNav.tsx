'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaFire } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";

const BottomNav: React.FC = () => {
  const pathname = usePathname();  

  const normalizePath = (path: string): string => path.replace(/\/$/, '');

  const isActive = (path: string): boolean => normalizePath(pathname) === normalizePath(path);
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border border-gray-200 rounded-t-3xl shadow-lg">
      
      <ul className="flex justify-between items-center px-6 py-6 text-xs text-gray-700">
        <li  className="flex flex-col items-center">
          <Link href="/hot" className={`${isActive('/hot') ? 'flex flex-col items-center transition-colors text-blue-500' : 'flex flex-col items-center hover:text-blue-500 transition-colors text-gray-500'}`}>
          <span className="text-lg"><FaFire /></span>
          <span className='text-s pt-2'>Hot</span>
          </Link>
        </li>

        <li  className="flex flex-col items-center">
          <Link href="/earn" className={`${isActive('/earn') ? 'flex flex-col items-center transition-colors text-blue-500' : 'flex flex-col items-center hover:text-blue-500 transition-colors text-gray-500'}`}>
          <span className="text-lg"><FaCoins /></span>
          <span className='text-s pt-2'>Earn</span>
          </Link>
        </li>

        <li  className="flex flex-col items-center">
          <Link href="/" className={`${isActive('/') ? 'flex flex-col items-center transition-colors text-blue-500' : 'flex flex-col items-center hover:text-blue-500 transition-colors text-gray-500'}`}>
          <span className="text-lg"><AiFillAppstore /></span>
          <span className='text-s pt-2'>My Apps</span>
          </Link>
        </li>

        <li  className="flex flex-col items-center">
          <Link href="/biolink" className={`${isActive('/biolink') ? 'flex flex-col items-center transition-colors text-blue-500' : 'flex flex-col items-center hover:text-blue-500 transition-colors text-gray-500'}`}>
          <span className="text-lg"><FaExternalLinkAlt /></span>
          <span className='text-s pt-2'>Biolink</span>
          </Link>
        </li>

        <li  className="flex flex-col items-center">
          <Link href="/wallet" className={`${isActive('/wallet') ? 'flex flex-col items-center transition-colors text-blue-500' : 'flex flex-col items-center hover:text-blue-500 transition-colors text-gray-500'}`}>
          <span className="text-lg"><FaWallet /></span>
          <span className='text-s pt-2'>Profile</span>
          </Link>
        </li>

        </ul>
    </nav>
  );
};

export default BottomNav;
