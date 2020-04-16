import React, { Component } from 'react';
import { TextInput, Text, Button, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const SearchBox = () => {

    return (
        <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Type something..." />
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        alignItems: "center"
    },
    searchInput: {
        height: 40,
        width: 250,
        backgroundColor: "#fafafa",
        borderRadius: 5,
        marginLeft: 20
    },
    searchButton: {
        width: 100,
        height: 40,
        backgroundColor: "#2FA4E7",
        color: "#fafafa",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 17,
        color: "#fafafa"
    }
});

export default SearchBox;