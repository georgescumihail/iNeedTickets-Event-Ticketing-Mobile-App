import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends Component {

    state = {

    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerTitle}>iNeedTickets</Text>
                </View>
                <View style={styles.headerButtonContainer}>
                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.buttonText}>My tickets</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.buttonText}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: "#2FA4E7",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTitle: {
        color: "#fafafa",
        fontSize: 20,
        marginLeft: 22,
    },
    headerButtonContainer: {
        flexDirection: "row",
    },
    headerButton: {
        marginRight: 15
    },
    buttonText: {
        fontSize: 16,
        color: "#fafafa"
    }
});

export default AppHeader;