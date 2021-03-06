import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AppHeader from './AppHeader';
import SearchBox from './SearchBox';
import { GetEventById } from '../services/EventService';
import { API_ROUTE } from '../services/Common';

class EventScreen extends Component {

    state = {
        event: {},
        location: {}
    }

    componentDidMount() {
        GetEventById(this.props.route.params.id)
            .then(res => this.setState({ event: res, location: res.location }));
    }

    render() {
        return (
            <View>
                <AppHeader />
                <View style={styles.eventContainer}>
                    <Image
                        style={styles.eventImage}
                        source={{ uri: API_ROUTE + "image/event?filename=" + this.state.event.photoLink }}
                    />
                    <Text style={styles.eventTitle}>{this.state.event.name}</Text>
                    <Text style={styles.eventDetails}>{this.state.location.name}</Text>
                    <Text style={styles.eventDetails}>{this.state.event.date}</Text>
                    <Text style={styles.eventDetails}>{this.state.event.description}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginVertical: 25,
        alignItems: "center"
    },
    eventImage: {
        width: 350,
        height: 200,
        borderRadius: 5
    },
    eventTitle: {
        fontSize: 20,
        color: "#2FA4E7",
        marginTop: 5
    },
    eventDetails: {
        fontSize: 15,
        marginTop: 5
    }
});

export default EventScreen;