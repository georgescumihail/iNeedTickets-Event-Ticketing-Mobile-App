import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    fetch('http://192.168.100.13:57868/api/events')
      .then((res) => res.json())
      .then((res) => this.setState({ events: res }));
  }

  render() {
    return (
      <View>
        <View>
          <Text>iNeedTickets</Text>
        </View>
        <View>
          {this.state.events.map(e => (
            <Text>{e.name}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default App;
