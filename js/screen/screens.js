import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';
import LoginScreen from './LoginScreen';
import FeedScreen from './FeedScreen';
import SearchScreen from './SearchScreen';
import AddScreen from './AddScreen';
import NotifScreen from './NotifScreen';
import ProfileScreen from './ProfileScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('example.FeedScreen', () => FeedScreen);
  Navigation.registerComponent('example.SearchScreen', () => SearchScreen);
  Navigation.registerComponent('example.AddScreen', () => AddScreen);
  Navigation.registerComponent('example.NotifScreen', () => NotifScreen);
  Navigation.registerComponent('example.ProfileScreen', () => ProfileScreen);
}
