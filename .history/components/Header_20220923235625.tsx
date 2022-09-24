import React from 'react';
import Image from 'next/image';
import NeflixLogo from '../public/netflix_official_logo.svg';
const Header = () => {
  return (
    <header>
      <div className="flex">
        <Image
          src={NeflixLogo}
          width={100}
          height="100%"
          className="cursor-pointer object-contain bg-red-100"
        />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
