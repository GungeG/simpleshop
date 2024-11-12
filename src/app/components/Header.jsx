"use client";
import Link from 'next/link';

const Header = () => {
  return (
    <div className="text-base border-solid border-2 m-2 border-blue-900 rounded-lg p-1">
      <ul className="flex space-x-12 ml-20">
        <li>
          <Link href="/page.js">
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