import React from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

AppRegistry.registerComponent('TheMovieDB', () => App);
