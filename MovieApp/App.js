/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Home from './src/screen/Home';
import store from './MovieStore';
import Navigator from './src/navigation/MainNav'

function App() {


  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
export default App;
