import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Movie } from '../typings';

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <BsChevronLeft className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0" />
        <BsChevronRight className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0" />
      </div>
    </div>
  );
};

export default Row;
