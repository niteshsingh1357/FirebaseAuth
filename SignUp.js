/* eslint-disable prettier/prettier */
// SignUp Screen

import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
      console.log('handleSignUp');
}

render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign Up</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {this.state.errorMessage &&
          // eslint-disable-next-line react-native/no-inline-styles
          <Text style={{ color: 'red', padding:15 }}>
            {this.state.errorMessage}
          </Text>}
        <TouchableOpacity onPress={this.handleSignUp}
          style={styles.button}
          color={'#432577'}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}>
            <Text>
            <Text> Already have an account?</Text><Text style={styles.linkText}> Login </Text>
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
