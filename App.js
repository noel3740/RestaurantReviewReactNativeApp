import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import RestaurantList from './src/components/RestaurantList'
import RestaurantInfo from './src/components/RestaurantInfo'

const RootStack = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
});

const App = createAppContainer(RootStack);

export default App;