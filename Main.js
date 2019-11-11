/* eslint-disable prettier/prettier */
// Main Screen
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

export default class Main extends React.Component {
    state = {
        currentUser: null,
    }
    // handleLogOut = () => {

    // }

    componentDidMount() {
      const { currentUser } = firebase.auth();
      this.setState({ currentUser });
}

    render() {
      const { currentUser } = this.state;
      return (
        <View style={styles.container}>
          <Text>
            Hi {currentUser && currentUser.email}!
          </Text>
          <TouchableOpacity onPress={() => firebase.auth().signOut()}
            style={styles.button}
            color={'#432577'}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 100,
      backgroundColor: '#432577',
      borderRadius: 2,
      padding: 8,
      margin: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
  },
  });
