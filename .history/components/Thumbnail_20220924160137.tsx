import React from 'react';
import Image from 'next/image';
import { Movie } from '../typings';

interface Props {
  movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
