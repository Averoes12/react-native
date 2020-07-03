/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  SectionList,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
]

  function Item({name}){
  return(
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <SectionList
      sections = {DATA}
  renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
  keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});