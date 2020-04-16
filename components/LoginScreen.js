import React, { Component } from 'react';
import { Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions } from 'react-native';

class LoginScreen extends Component {

    state = {

    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginTitle}>iNeedTickets</Text>
                    <TextInput style={styles.loginInput} placeholder="Email"></TextInput>
                    <TextInput style={styles.loginInput} placeholder="Password"></TextInput>
                    <TouchableOpacity style={styles.loginButton} >
                        <Text style={styles.buttonText} onPress={() => this.props.loginToggle()}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#2FA4E7"
    },
    loginContainer: {
        width: 320,
        height: 400,
        marginTop: 100,
        backgroundColor: "#fafafa",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10
    },
    loginTitle: {
        color: "#2FA4E7",
        fontSize: 24,
        marginVertical: 40
    },
    loginInput: {
        width: 240,
        height: 40,
        marginBottom: 25,
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10
    },
    loginButton: {
        width: 100,
        height: 40,
        backgroundColor: "#2FA4E7",
        color: "#fafafa",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 17,
        color: "#fafafa"
    }
});

export default LoginScreen;