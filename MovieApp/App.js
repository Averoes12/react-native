/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './src/compontent/Home';
import store from './MovieStore'

class App extends Component{

  render() {
    return (
      <Provider store={store}>
        <Home />

      </Provider>
    )
  }
}

export default App;