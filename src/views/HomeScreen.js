import React from 'react';
import { AppRegistry, View, Button, ScrollView } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import MovieDetail from '../components/MovieDetail';
import { SearchBar } from 'react-native-elements'

class HomeScreen extends React.Component {

  constructor(props) {
   super(props);
   this.state = { movies: [] };
 }

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.list();
  }

  renderMovies() {
    return this.state.movies.map(movie => <MovieDetail key={movie.id} movie={movie}
      onPress={() =>
        this.props.navigation.navigate('Details', { movie: movie })
      }
      />
    );
  }

  list() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=627e3f67dac2c73e662093fe66b67ce7')
      .then(response => this.setState({ movies: response.data.results}));
  }

  search(text) {
    let searchText = text.text;
    if (searchText.length == 0) {
      this.list();
    } else {
      var url =  'https://api.themoviedb.org/3/search/movie?api_key=627e3f67dac2c73e662093fe66b67ce7&query=' + searchText;
      axios.get(url)
      .then(response => this.setState({ movies: response.data.results}));
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EFEFEF'}}>
        <Header headerText={'TMDB'} />
            <View>
              <SearchBar
                noIcon
                onChangeText={(text) => this.search({text})}
                placeholder='Search movie...' />

              <ScrollView>
                {this.renderMovies()}
              </ScrollView>
            </View>
      </View>
    );
  }
}

export default HomeScreen;
