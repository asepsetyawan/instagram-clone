/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import LoginManager from '../controller/LoginManager';
import EventHandler from '../core/EventHandler';

type Props = {
  navigator: Object,
};
type State = {
  loggedIn: boolean,
};

export default class App extends Component<Props, State> {
  state = {
    // loggedIn: LoginManager.loggedIn(),
    loggedIn: LoginManager.loggedIn(),
    // foo: 1,
  };

  render() {
    if (!this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.fetchData()}>
            <Text style={styles.welcome}>Login</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>User is Logged In.</Text>
        </View>
      );
    }
  }

  async fetchData() {
    const json = await LoginManager.getMoviesFromApi();
    this.props.navigator.push({
      screen: 'example.PushedScreen',
      title: json.data.name,
      passProps: { json },
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
