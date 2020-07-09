import React, {Component} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';

class ReviewItem extends Component {
  render() {
    const {author, content} = this.props.reviews;

    return (
      <View>
        <Card containerStyle={{borderRadius: 10}}>
          <Text>{author}</Text>
          <Text>{content}</Text>
        </Card>
      </View>
    );
  }
}

export default ReviewItem;
