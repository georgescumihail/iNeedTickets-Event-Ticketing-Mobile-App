import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const AppFooter = () => {

    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>iNeedTickets - 2020</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: "#2FA4E7",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerText: {
        color: "#fafafa",
        fontSize: 16,
        marginLeft: 20
    }
});

export default AppFooter;