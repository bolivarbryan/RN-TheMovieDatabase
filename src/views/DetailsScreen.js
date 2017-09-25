import React from 'react';
import { AppRegistry, View, ImageBackground, ScrollView, Text } from 'react-native';
import Button from '../components/Button';
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
    const { title, poster_path, release_date, overview, vote_average } = this.state.movie;

    return (
      <View style={styles.containerStyle}>
        <ImageBackground
          style={styles.imageStyle}
          source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster_path }}>
          <Button onPress={() => this.props.navigation.goBack(null)} style={styles.buttonStyle} >
            Back
          </Button>
          </ImageBackground>

          <View style={styles.headerContainerStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
          </View>

          <View style={styles.contentContainerStyle}>
            <Text style={styles.contentTextStyle}>{overview}</Text>
          </View>

      </View>
    );
  }

  componentWillMount() {
    this.fetchData(this.state.movie.id);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EFEFEF'}}>
        <ScrollView>
          {this.renderMovie()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  containerStyle: {
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#FFFFFF'
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '600'
  },
  headerContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },
  contentContainerStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  contentTextStyle: {
    fontSize: 14,
  }
};

export default DetailsScreen;
