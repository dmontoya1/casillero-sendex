import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Details from './../Screens/Details';
import Home from './../Screens/Home';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },
      Details: {
        screen: Details,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
);

export default AppContainer;
