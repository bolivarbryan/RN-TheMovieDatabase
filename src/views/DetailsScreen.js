import React from 'react';
import { AppRegistry, View, Button } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

class DetailsScreen extends React.Component {
  constructor(props) {
   super(props);
   this.state = { movie: this.props.navigation.state.params.movie };
  }

  static navigationOptions = {
    header: null
  };

  fetchData(id) {
    var url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=627e3f67dac2c73e662093fe66b67ce7';
    console.log(url);
    axios.get(url)
      .then(response => this.setState({ movie: response.data.results}));
  }

  renderMovie() {
    console.log(this.state.movie);
    //return this.state.movie
  }

  componentWillMount() {
    this.fetchData(this.state.movie.id);
  }

  render() {
    const { title, poster_path, release_date, overview, vote_average } = this.state.movie;

    return (
      <View style={{ flex: 1, backgroundColor: '#EFEFEF'}}>
      <Header headerText={title} />
        {this.renderMovie()}
      </View>
    );
  }
}

export default DetailsScreen;
