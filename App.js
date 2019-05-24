import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import CompassScreen from "./CompassScreen";
import DateScreen from "./DateScreen";
import CalenderScreen from "./CalenderScreen";

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Compass: CompassScreen,
    Date: DateScreen,
    Calender: CalenderScreen
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}