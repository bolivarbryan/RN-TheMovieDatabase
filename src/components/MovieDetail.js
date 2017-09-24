import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Moment from 'moment';

const MovieDetail = ({ movie }) => {
  const { title, poster_path, release_date, overview, vote_average } = movie;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    bodyTextStyle,
    bodyContentStyle,
    iconStyle,
    iconWithTextStyle
   } = styles;
return (
    <Card>

    <CardSection>
    <View style={headerContentStyle}>
        <Text style={headerTextStyle}>
          {title} ({ Moment(release_date).format('YYYY') })
        </Text>
        <View style={iconWithTextStyle}>
          <Image source={require('./Star.png')} style={iconStyle}/>
          <Text style={headerTextStyle}>{vote_average}</Text>
        </View>
    </View>
    </CardSection>

    <CardSection>
      <Image
        style={imageStyle}
        source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster_path }}
      />
      <Text style={bodyTextStyle}>{overview}</Text>
    </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '600'
  },
  bodyContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginLeft: 50,
      marginRight: 50
  },
  bodyTextStyle: {
    fontSize: 12,
    flex: 1
  },
  imageStyle: {
    height: 140,
    width: 98,
    marginRight:10
  },
  iconStyle: {
    height: 12,
    width: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  iconWithTextStyle:  {
    flexDirection: 'row',
    alignItems: 'center',
  }
};


export default MovieDetail;
