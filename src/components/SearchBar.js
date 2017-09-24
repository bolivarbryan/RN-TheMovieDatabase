import React, { Component } from 'react';
import { View } from 'react-native';

const SearchBar = () => {
  const { viewStyle } = styles;
  return (
  <View style={viewStyle} ></View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#CCCCCC',
    height: 60,
  }
};

export default SearchBar;
