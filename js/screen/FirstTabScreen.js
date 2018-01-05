import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import LoginManager from '../controller/LoginManager';
import EventHandler from '../core/EventHandler';

export default class App extends Component<{}> {
  state = {
    loggedIn: LoginManager.loggedIn(),
  };

  _subscriptions = [];

  componentDidMount() {
    this._subscriptions.push(
      EventHandler.addListener('didLogIn', this.handleLoggedIn)
    );
    this._subscriptions.push(
      EventHandler.addListener('didLogOut', this.handleLoggedOut)
    );
    if(!this.state.loggedIn){
      this.handleLoggedOut();
    }
  }

  componentWillUnmount() {
    this._subscriptions.forEach(sub => sub.remove());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          FirstTabScreen
        </Text>
      </View>
    );
  }

  handleLoggedIn = () => {
    console.log("hello");
    Navigation.dismissModal();
  }

  handleLoggedOut = () => {
    Navigation.showModal({
      screen: 'example.LoginScreen',
      title: 'Login'
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
