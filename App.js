//import React, { Component } from 'react'
import React from 'react';
import { Button, View, Text,ImageBackground, StyleSheet, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import Guia from './src/screens/HomeScreen/Guia'
import PredictScreen from './src/screens/PredictScreen'

class Inicio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Prediction')}
        />
      </View>
    );
  }
}




const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Prediction: { screen: PredictScreen },
    Guias: { screen: Guia },

 }, 

  {
    initialRouteName: 'Home'
  }


   );

export default class App extends React.Component {
  render() {
    return <RootStack/>
  }
}


