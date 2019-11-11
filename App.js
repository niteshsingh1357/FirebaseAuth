/* eslint-disable prettier/prettier */
/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


// import the different screens
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

//create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default createAppContainer(App);
