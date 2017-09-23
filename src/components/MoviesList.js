import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MovieDetail from './MovieDetail';

class MoviesList extends Component {
  state = { movies: [] };

  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=627e3f67dac2c73e662093fe66b67ce7')
      .then(response => this.setState({ movies: response.data.results}));
  }

  renderMovies() {
    return this.state.movies.map(movie => <MovieDetail key={movie.title} movie={movie} />
    );
  }

  render() {
  return (
    <ScrollView>
      {this.renderMovies()}
    </ScrollView>
  );
}
}

export default MoviesList;
