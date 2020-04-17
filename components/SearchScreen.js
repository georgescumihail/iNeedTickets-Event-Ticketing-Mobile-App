import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { GetEventsByQuery } from '../services/EventService';
import AppHeader from './AppHeader';
import SearchBox from './SearchBox';
import EventBox from './EventBox';

class SearchScreen extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        GetEventsByQuery(this.props.route.params.query).then(res => this.setState({ events: res }));
    }

    render() {
        return (
            <View>
                <AppHeader />
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

export default SearchScreen;