import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import EventBox from './EventBox';
import SearchBox from './SearchBox';

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
                <SearchBox />
                <ScrollView contentContainerStyle={styles.homeContainer}>
                    {this.state.events.map(e => (
                        <EventBox
                            key={e.id}
                            name={e.name}
                            date={e.date}
                            locationName={e.location.name}
                            filename={e.photoLink} />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        alignItems: "center",
        marginVertical: 30
    }
});

export default Home;