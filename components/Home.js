import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import EventBox from './EventBox';
import SearchBox from './SearchBox';
import AppHeader from './AppHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppFooter from './AppFooter';

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
            <View style={styles.homeContainer}>
                <AppHeader />
                <SearchBox />
                <ScrollView contentContainerStyle={styles.eventsContainer}>
                    {this.state.events.map(e => (
                        <TouchableOpacity
                            key={e.id}
                            onPress={() => this.props.navigation.navigate("Event", { id: e.id })}>
                            <EventBox
                                key={e.id}
                                name={e.name}
                                date={e.date}
                                locationName={e.location.name}
                                filename={e.photoLink} />
                        </TouchableOpacity>
                    ))}
                    <AppFooter />
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventsContainer: {
        alignItems: "center",
        marginTop: 30,
        paddingBottom: 150
    }
});

export default Home;