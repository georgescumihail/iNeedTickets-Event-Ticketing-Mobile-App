import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventBox = props => {

    return (
        <View style={styles.eventContainer}>
            <Image
                source={{ uri: "http://192.168.100.13:57868/api/image/event?filename=" + props.filename }}
                style={styles.eventImage}>
            </Image>
            <Text style={styles.eventTitle}>{props.name}</Text>
            <Text style={styles.eventDetails}>{props.date.substring(0, 10)} - {props.locationName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    eventContainer: {
        width: 300,
        height: 250,
        backgroundColor: "#f5f5f5",
        marginHorizontal: 30,
        marginVertical: 15
    },
    eventImage: {
        width: 300,
        height: 160
    },
    eventTitle: {
        alignSelf: "center",
        fontSize: 20,
        color: "#2FA4E7",
        marginTop: 5
    },
    eventDetails: {
        alignSelf: "center",
        fontSize: 15,
        marginTop: 5
    }
});


export default EventBox;