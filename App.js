import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import HomeScreen from "./components/HomeScreen.js";
import KitaCamera from "./components/KitaCamera.js";
import GPS from "./components/GPS.js";
import TestCam from "./components/testCam";
import Expo from "expo";
import Main from "./components/Chat/Main";
import BarCodeScannerExample from "./components/BarCodeScannerExample";
import NewBarCode from "./components/NewBarCode";
import SwipeNavigator from "react-native-swipe-navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
