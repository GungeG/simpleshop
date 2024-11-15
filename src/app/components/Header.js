"use client";
import Link from 'next/link';
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className="text-base border-solid border-2 m-2 border-blue-900 rounded-lg p-2">
      <div className="flex justify-between items-center">
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
        <Link href="/payments">
        <SlBasket className="mr-8 text-2xl"/>
        </Link>
      </div>
    </div>
  );
};

export default Header;