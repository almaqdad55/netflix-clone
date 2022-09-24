import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NeflixLogo from '../public/netflix_official_logo.svg';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
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
      <div className="flex items-center space-x-4 text-sm font-light">
        <AiOutlineSearch className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BsFillBellFill className="h-6 w-6" />
        <div>
          <Image
            src="https://rb.gy/g1pwyx"
            height={34}
            width={34}
            className="cursor-pointer rounded"
          />{' '}
          <Link href="/account">
            <Image
              src="https://rb.gy/g1pwyx"
              height={34}
              width={34}
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
