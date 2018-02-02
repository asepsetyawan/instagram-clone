import { Navigation } from 'react-native-navigation';

import { registerScreens } from './js/screen/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'example.FeedScreen', // unique ID registered with Navigation.registerScreen
      icon: require('./img/home.png'), // local image asset for the tab icon unselected state (optional on iOS)
      iconInsets: { // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0 // optional, default is 0.
      },
      title: 'Feed', // title of the screen as appears in the nav bar (optional)
      navigatorStyle: {
        width: "10%",
        scale: 2,
      }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
      navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
    },
    {
      //label: 'Two',
      screen: 'example.SearchScreen',
      icon: require('./img/search.png'),
      iconInsets: { // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0 // optional, default is 0.
      },
      //selectedIcon: require('../img/two_selected.png'),
      title: 'Search'
    },
    {
      //label: 'Two',
      screen: 'example.AddScreen',
      icon: require('./img/plus.png'),
      iconInsets: { // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0 // optional, default is 0.
      },
      //selectedIcon: require('../img/two_selected.png'),
      title: 'Add'
    },
    {
      //label: 'Two',
      screen: 'example.NotifScreen',
      icon: require('./img/star.png'),
      iconInsets: { // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0 // optional, default is 0.
      },
      //selectedIcon: require('../img/two_selected.png'),
      title: 'Notification'
    },
    {
      //label: 'Two',
      screen: 'example.ProfileScreen',
      icon: require('./img/profile.png'),
      iconInsets: { // add this to change icon position (optional, iOS only).
        top: 6, // optional, default is 0.
        left: 0, // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0 // optional, default is 0.
      },
      //selectedIcon: require('../img/two_selected.png'),
      title: 'Profile'
    }
  ]
});
