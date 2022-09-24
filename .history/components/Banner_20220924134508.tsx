import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Movie } from '../typings';

interface Props {
  netflixOriginals: Movie[];
}
const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div>
      <div>{/* <Image src={}/> */}</div>
    </div>
  );
};

export default Banner;
