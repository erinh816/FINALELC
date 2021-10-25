import React, { Component } from "react";
import { Audio } from "expo-av";
import Expo from "expo";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Web from "./WebView.js";
import { WebView } from "react-native-webview";
import { Asset, Font, Video, AppLoading } from "expo";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // fontLoaded: false,
      isReady: false,
      instructionPlay: false,
    };
  }
  componentDidMount() {
    const { nav } = this.props;
  }
  //
  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Monoton: require("../assets/Monoton/Monoton-Regular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  //

  async componentDidMount() {
    (async () => {
      await Font.loadAsync({
        Monoton: require("../assets/Monoton/Monoton-Regular.ttf"),
      });

      this.setState({ isReady: true });
    })();

    try {
      await Expo.Audio.setIsEnabledAsync(true);
    } catch (error) {
      console.log(error);
    }
  }

  //audio play **********//
  handlePLay1 = async () => {
    if (this.state.instructionPlay) {
      this.audioPlayer1.stopAsync();
      this.state.instructionPlay = true;
      return;
    }
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(require("../instruction.mp3"));
      {
        shouldPlay: true;
      }
      this.audioPlayer1 = soundObject;
      this.audioPlayer1.playAsync();
      this.audioPlayer1.setPositionAsync(0);
      // this.audioPlayer1.setRateAsync(1, false);
      this.state.instructionPlay = false;
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };

  async _cacheResourcesAsync() {
    const samples = [require("../instruction.mp3")];

    const cacheSamples = samples.map((samples) => {
      return Asset.fromModule(samples).downloadAsync();
    });
    return Promise.all(cacheSamples);
  }

  render() {
    // if (!this.state.isReady) {
    //   return <AppLoading />;
    // }

    // down is the original naviagtion
    // const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F2BB05",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={[styles.boxContainer, styles.text]}>
          <Text style={{ fontFamily: "Monoton", fontSize: 50 }}>ClarifEYE</Text>
        </View>

        <View style={[styles.boxContainer, styles.image]}>
          <Image
            onTouchStart={this.handlePLay1}
            source={require("../assets/eye.png")}
          />
        </View>
        {/* <Button on
                    title="BARCODE"
                /> */}
        <View style={[styles.boxContainer, styles.animation]}>
          <WebView source={{ uri: "https://erinh816.github.io/WebView/" }} />
        </View>
        {/* down is the original navigation */}
        {/* {this.handleNavigation(navigate)} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#F2BB05",
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    // backgroundColor: 'transparent',
    flex: 1, //1:1
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  boxcontainer: {
    flex: 1, //1:3
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 100,
    fontFamily: "Monoton",
  },
  image: {
    // backgroundColor: "#F2BB05",
    width: 160,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    flexDirection: "column",
  },
  animation: {
    flex: 1,
    flexDirection: "column",
    // position: 'fixed',
    zIndex: -9999,

    // backgroundColor: [UIColor clearcolor],
  },
});

export default HomeScreen;
