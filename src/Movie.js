import React from 'react';
import './Movie.scss';
import { PropTypes } from 'prop-types';

const Movie = ({title, poster, genres, synopsis}) => {
 return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Generes">
          {genres.map((genre, index) => <MovieGeneres genre={genre} key={index} />)}
        </div>
        <p className="Movie_Synopsis">
          {synopsis}
        </p>
      </div>
    </div>   
 )
}

const MoviePoster = ({poster, alt}) => {
  return (
    <img src={poster} alt={alt} title={alt} class=""/>
  )
}

const MovieGeneres = ({genre}) => {
  return (
    <span>{genre} </span>
  )
}


Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  synopsis: PropTypes.string
}

MoviePoster.propTypes = {
  poster: PropTypes.string,
  alt: PropTypes.string
}

MovieGeneres.propTypes = {
  genres: PropTypes.array
}


export default Movie;
