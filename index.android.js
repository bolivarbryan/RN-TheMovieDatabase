import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MoviesList from './src/components/MoviesList';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#EFEFEF'}}>
  <Header headerText={'TMDB'} />
    <MoviesList />
  </View>
);

AppRegistry.registerComponent('TheMovieDB', () => App);
