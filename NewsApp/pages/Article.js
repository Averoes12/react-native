import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import moment from 'moment';
import {Card} from 'react-native-elements';

export default class Article extends Component {
  render() {
    const {
      tite,
      description,
      publishedAt,
      source,
      urlToImage,
      url,
    } = this.props.article;

    const time = moment(publishedAt || moment.now).fromNow();
    const defaulImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}>
        <Card
          featuredTitle={tite}
          featuredTitleStyle={styles.featuredTitleStyle}
          containerStyle={{borderRadius: 10}}
          image={{
            uri: urlToImage || defaulImg,
          }}>
          <Text style={{marginBottom:10}}>
            {description || 'Read More...'}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={styles.noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: 'grey',
    fontSize: 10,
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 3,
  },
};

