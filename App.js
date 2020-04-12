import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <View>
        <Header />
        <Home />
      </View>
    );
  }
}

export default App;
