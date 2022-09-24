import React from 'react';
import Image from 'next/image';
import NeflixLogo from '../public/netflix_official_logo.svg';
const Header = () => {
  return (
    <header>
      <div>
        <Image src={NeflixLogo} width={100} height={100} />
      </div>
      <div></div>
    </header>
  );
};

export default Header;
