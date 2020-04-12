import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class Header extends Component {

    state = {

    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>iNeedTickets</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: "#2FA4E7",
    },
    headerTitle: {
        color: "#fafafa",
        fontSize: 20
    }
});

export default Header;