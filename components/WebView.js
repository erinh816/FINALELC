import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

class Web extends Component {
  componentDidMount() {
    const { nav } = this.props;
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 320, backgroundColor: "#F2BB05" }}>
        <WebView
          source={{ uri: "https://erinh816.github.io/WebView/" }}
          // style={{ marginBottom: -100 }}
        />
      </View>
    );
  }
}

export default Web;
