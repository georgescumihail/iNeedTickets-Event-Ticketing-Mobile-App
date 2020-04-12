import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EventBox from './EventBox';

class Home extends Component {

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
                    {this.state.events.map(e => (
                        <EventBox key={e.id} name={e.name} date={e.date} locationName={e.location.name} />
                    ))}
                </View>
            </View>
        );
    }
}

export default Home;