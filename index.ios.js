import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MoviesList from './src/components/MoviesList';
import SearchBar from './src/components/SearchBar'

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#EFEFEF'}}>
  <Header headerText={'TMDB'} />
    <SearchBar />
    <MoviesList />
  </View>
);

AppRegistry.registerComponent('TheMovieDB', () => App);
