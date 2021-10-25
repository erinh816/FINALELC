import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// import Chat from "./Chat";

class Main extends React.Component {
  static navigationOptions = {
    title: "Chatter",
  };

  state = {
    name: "",
  };

  //   onPress = () => this.props.nav.navigate("Chat", { name: this.state.name });

  onChangeText = (name) => this.setState({ name });

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F2BB05",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;
