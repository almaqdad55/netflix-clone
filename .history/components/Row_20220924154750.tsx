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
        <BsChevronLeft />
        <BsChevronRight />
      </div>
    </div>
  );
};

export default Row;
