import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import axios from "axios";
// const example = require('./db');
// const api_key = 'SEM3790AD91AF76ED7236D0E689409DB1FE8';
// const api_secret = 'ZTBjM2QzNDIxZjUyMDQ0YWM5NmE4OGIxM2FiZDZhZDA';
// const sem3 = require('semantics3-node')('api_key', 'api_secret');

export default class BarCodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    data: [],
  };

  // componentDidMount() {
  //     const { nav } = this.props

  // }

  async componentDidMount() {
    console.log("barcode console log");
    const { nav } = this.props;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          // onBarCodeScanned={this.speak}
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned({ type, data }) {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    Expo.Speech.speak("Hand Sanitizer 490228657", {
      language: "en-EN",
      pitch: 1,
      rate: 1.0,
    });
    //call api with data variable
    //receive Response
    //speak response
    //navigate back to home page
    // const URL = `http://localhost:3000/posts/${data}`;

    // return fetch(URL)
    //     .then((res) => res.json());

    // Expo.Speech.speak(res);
    axios
      .get(
        "https://api.barcodelookup.com/v2/products?barcode=data&formatted=y&key=h7opmrs7kzps0dsy4kfbcdvctyxmxr"
      )
      .then(function (res) {
        console.log(res);
      });

    //     const fetchData = (sem3.products.products_field('upc', '883974958450')) => {

    //     }.then((products) => JSON.stringify(products))

    //     sem3.products.products_field("upc", "883974958450");

    //     sem3.products.get_products(
    //         function (err, products) {
    //             if (err) {
    //                 console.log("Couldn't execute request: get_products");
    //                 return;
    //             }
    //             console.log("Results of request:\n" + JSON.stringify(products));
    //         }
    //     );

    // }

    // const fetchData = sem3.products.products_field('upc', '883974958450').then((products) => JSON.stringify(products)).catch(err => console.log(err));
  }
}
