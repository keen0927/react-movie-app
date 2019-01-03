import React, { Component } from 'react';
import Movie from './Movie';

const movies = [
  {
    title: 'Matrix',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdonEnEOvFIqxc0ORv_SmB5usUvGzjiZNdntX_HBFd9XOqIse9g'
  },
  {
    title: 'starwars',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJx9yyP5aRJ6nwAiP_mlmP5glaitpGtjyAs4r3GqrGj2Ftq0qW'
  },
  {
    title: 'avatar',
    poster: 'http://img.hani.co.kr/imgdb/resize/2010/0107/6000383621_20100107.JPG'
  },
  {
    title: 'old boy',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MTsEmFMOu8XXEl-0Dxc1bM3lQ1Ibtgk7_tax9zokTvKj6AiNrQ'
  },      
]

class App extends Component {
  
  state = {
    greeting: 'Hello!'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello Again'
      })
    },5000)
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
