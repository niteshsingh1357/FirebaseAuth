/* eslint-disable prettier/prettier */
/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// import the different screens
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

//create our app's navigation stack
const Home = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({
        header: null,
      }),
    },
  }
);

const App = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    SignUp: SignUp,
    Main: Home,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default createAppContainer(App);
