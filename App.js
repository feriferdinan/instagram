/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native'
import Instagram from './src/Instagram'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
        <Instagram />
      </View>
    )
  }
}

export default App