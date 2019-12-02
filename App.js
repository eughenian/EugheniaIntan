import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FriendScreen from './screens/FriendScreen';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Friend: FriendScreen,
  Home: HomeScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: 'COMPUTER SCIENCE', 
      headerStyle:{
        backgroundColor: '#005FAA'
      },
      headerTintColor: 'white',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }
  });

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
