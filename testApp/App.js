/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button } from 'react-native';

export default class Test extends Component {

  render() {
    const animal = "Cat"
    var family = "Persian cat"
    var hungry = true;

    function getAnimal(first, second) {
      return "My food is " + first + " and i like " + second
    }

    function Cat1(name) {
      return (
        <View>
          <Text>I'm {name.name}</Text>
          <Text>I'm Angora Cat</Text>
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      )
    }

    function Cat2(name) {
      return (
        <View>
          <Text>Hello i'm {name.name}</Text>
          <Text>I'm Persian Cat</Text>
          <Text>{getAnimal("Wishkas", "Ball")}</Text>
          <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style=
            {{ width: 200, height: 100 }} />
        </View>
      );
    }

    function FeedCat(props) {
      const [isHungry, setIsHungry] = useState(true)
      const [feed, setFeed] = useState(5)

      return (
        <View>
          <Text>
            I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
          </Text>
          <Text>
            Feed : {feed}
          </Text>
          <Button
            onPress={() => {
              if (feed <= 5 && feed) {
                setFeed(feed - 1)
              }
              if (feed == 1) {
                setIsHungry(false)
              }
            }}
            disabled={!isHungry}
            title={
              isHungry ? "Feed me whiskas, please" : "I am full thank you"
            }

          />
        </View>
      )
    }

    function UselessTextInput() {
      const [text, setText] = useState('');

      return (
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type text here!"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
          <Text
            style={{ padding: 10, fontSize: 42 }}>
            {text.split(' ').map((word) => word && '🍕').join('')}
          </Text>

        </View>
      )
    }
    return (
      <ScrollView>
        <Cat1 name="Cat" />
        <FeedCat name="Munkstrap" />
        <Cat2 name="Cat" />
        <FeedCat name="Poppy" />
        <UselessTextInput />
      </ScrollView>
    );
  }
}
