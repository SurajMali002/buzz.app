import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Facebook from './Screens/facebook';
import Instagram from './Screens/instagram';
import { render } from 'react-dom';

export default class App extends React.Component {
    render(){
      return(
          <AppContainer/>
          
      );
    }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {Screens:Facebook},
  Instagram:{Screens:Instagram},  
});

const AppContainer = createAppContainer(TabNavigator);