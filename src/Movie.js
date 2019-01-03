import React from 'react';
import './Movie.css';
import { PropTypes } from 'prop-types';

// class Movie extends Component {

//   render() {
    
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

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

// MoviePoster.propTypes = {
//   poster: proptypes.string
// }
Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
}

MoviePoster.propTypes = {
  poster: PropTypes.string,
}

export default Movie;
