import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NeflixLogo from '../public/netflix_official_logo.svg';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={NeflixLogo}
          width={100}
          height="100%"
          className="cursor-pointer object-contain "
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div>
        <AiOutlineSearch className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BsFillBellFill className="  h-6 w-6" />
        <Link href="/account">
          <Image src="https://rb.gy/g1pwyx" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
