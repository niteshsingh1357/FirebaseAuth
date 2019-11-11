/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// Login Screen

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

export default class Login extends React.Component {
  state = {
      email: '',
      password: '',
      errorMessage: null,
    }
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
      console.log('handleLogin');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {this.state.errorMessage &&
          <Text style={{ color: 'red', padding:15 }}>
            {this.state.errorMessage}
          </Text>}
        <TouchableOpacity onPress={this.handleLogin}
          style={styles.button}
          color={'#432577'}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>
            <Text> Don't have an account?</Text><Text style={styles.linkText}> SignUp </Text>
            </Text>
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 2,
  },
  button: {
    width: 100,
    backgroundColor: '#432577',
    borderRadius: 2,
    padding: 10,
    margin: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    fontWeight: 'bold',
    color: '#432577',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
