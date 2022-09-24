import React from 'react';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
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
        <BsChevronBarLeft />
        <BsChevronBarRight />
      </div>
    </div>
  );
};

export default Row;
