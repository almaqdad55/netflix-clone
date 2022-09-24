import React from 'react';
import { Movie } from '../typings';

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Row;
