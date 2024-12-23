import React from 'react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-white border border-gray-200 rounded-xl shadow-lg">
      <ul className="flex justify-between items-center px-6 py-4 text-xs text-gray-700">
        <li className="flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg">🏠</span>
            <span>Home</span>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link href="/search" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg">🔍</span>
            <span>Search</span>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link href="/notifications" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg">🔔</span>
            <span>Alerts</span>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link href="/profile" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg">👤</span>
            <span>Profile</span>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link href="/settings" className="flex flex-col items-center hover:text-blue-500 transition-colors">
            <span className="text-lg">⚙️</span>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
