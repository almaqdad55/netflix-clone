import React from 'react';
import { Movie } from '../typings';

interface Props {
  movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
  return <div>Thumbnail</div>;
};

export default Thumbnail;
