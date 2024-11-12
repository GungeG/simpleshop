"use client";
import Link from 'next/link';

const Header = () => {
  return (
    <div className="text-base border-solid border-2 m-2 border-blue-900 rounded-lg p-1">
      <ul className="flex space-x-8 ml-8">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;