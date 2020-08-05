/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/Store';
import Home from './src/Home';

function App() {
  return (
      <Provider store={store}>
        <Home />
      </Provider>
  );
}
export default App;
