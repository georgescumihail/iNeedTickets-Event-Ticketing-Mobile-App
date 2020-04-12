import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const EventBox = props => {

    return (
        <View style={styles.eventContainer}>
            <Image style={styles.eventImage}></Image>
            <Text style={styles.eventTitle}>{props.name}</Text>
            <Text style={styles.eventDate}>{props.date} - {props.locationName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    eventContainer: {
        width: 300,
        height: 200,
        backgroundColor: "#fafafa",
        marginHorizontal: 30,
        marginVertical: 15,
        alignSelf: "center"
    },
    eventImage: {
        width: 300,
        height: 120
    },
    eventTitle: {
        alignSelf: "center",
        fontSize: 20,
        color: "#2FA4E7"
    },
    eventDate: {
        alignSelf: "center",
        fontSize: 15
    }
});


export default EventBox;