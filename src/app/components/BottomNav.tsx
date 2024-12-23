import React from 'react';
import Link from 'next/link';
import { FaFire } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border border-gray-200 rounded-t-3xl shadow-lg">

      <ul className="flex justify-between items-center px-6 py-6 text-xs text-gray-700">
        <li className="flex flex-col items-center">
          <Link href="/hot" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg"><FaFire /></span>
            <span className='text-s pt-2'>Hot</span>
          </Link>
        </li>

        <li className="flex flex-col items-center">
          <Link href="/earn" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg"><FaCoins /></span>
            <span className='text-s pt-2'>Earn</span>
          </Link>
        </li>
        
        <li className="flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg"><AiFillAppstore /></span>
            <span className='text-s pt-2'>My Apps</span>
          </Link>
        </li>

        <li className="flex flex-col items-center">
          <Link href="/biolink" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg"><FaExternalLinkAlt /></span>
            <span className='text-s pt-2'>Biolink</span>
          </Link>
        </li>

        <li className="flex flex-col items-center">
          <Link href="/wallet" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg"><FaWallet /></span>
            <span className='text-s pt-2'>Wallet</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
