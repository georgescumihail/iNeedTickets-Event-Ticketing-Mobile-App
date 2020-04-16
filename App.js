import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import EventScreen from './components/EventScreen';

const Stack = createStackNavigator();

class App extends Component {

  state = {
    isLoggedIn: false
  }

  loginToggle = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal"
          }}>
          {this.state.isLoggedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home} />
              <Stack.Screen
                name="Event"
                component={EventScreen} />
            </>
          ) : (
              <>
                <Stack.Screen name="Login">
                  {props => <LoginScreen {...props} loginToggle={this.loginToggle} />}
                </Stack.Screen>
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
