import React, {Component} from 'react';
import {
  TouchableNativeFeedback,
  View,
  Image,
  Text,
  Alert,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Card, Rating} from 'react-native-elements';
import moment from 'moment';
import {IMAGE_URL} from '../constans/constant';

class RecomendationItem extends Component {
  render() {

    const {navigation} = this.props;
    const {title, poster_path, vote_average, release_date, id} = this.props.results;
    const time = moment(release_date || moment.now).fromNow();

    return (
        <TouchableNativeFeedback
        useForeground
          onPress={() =>
            navigation.replace('Detail', {
              id: id,
            })
          }>
          <Card
            containerStyle={style.cardContainer}
            imageStyle={style.imageStyle}
            image={{uri: IMAGE_URL + poster_path}}>
            <Text numberOfLines={2} ellipsizeMode="clip" style={style.title}>
              {title}
            </Text>
            <Rating
              type="heart"
              style={style.rating}
              imageSize={20}
              startingValue={vote_average / 2}
              readonly
            />
            <Text style={style.title}>{time}</Text>
          </Card>
        </TouchableNativeFeedback>
    );
  }
}

const style = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    elevation: 2,
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    width: 150,
    textAlign: 'center',
  },

  rating: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginStart: 16,
    marginTop: 8,
  },
});

export default RecomendationItem
