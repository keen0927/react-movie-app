import React from 'react';
import './Movie.css';
import { PropTypes } from 'prop-types';

const Movie = ({title, poster}) => {
 return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>   
 )
}

const MoviePoster = ({poster}) => {
  return (
    <img src={poster} alt="" />
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
}

MoviePoster.propTypes = {
  poster: PropTypes.string,
}

export default Movie;
