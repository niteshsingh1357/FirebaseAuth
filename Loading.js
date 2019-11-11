/* eslint-disable prettier/prettier */
// Loading Screen

import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Main' : 'Login');
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
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
});

