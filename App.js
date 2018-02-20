import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Dimensions,
	TextInput,
  BackHandler,
  TouchableOpacity
} from 'react-native';

const  { height, width } = Dimensions.get("window");
import SlidingBox from "./SlidingBox";
import withScaleAnimation from "./HOC";

export function Button({
  onPress,
  label = 'Click me',
  buttonStyle = styles.button,
  textColor = styles.text,
}) {

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textColor}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

export function ScaledText({
  onPress,
  label = "Click Me",
  textColor = styles.text
}) {
  return (
    <Text onPress={onPress} style={textColor}>{label.toUpperCase()}</Text>
  );
}

export const AnimatedBasicButton = withScaleAnimation(ScaledText);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedBasicButton onPress={() => console.log("Hi..")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderColor: "#000000"
  },
  button: {
    width: 150,
    height: 75,
    backgroundColor: 'ivory',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
  brown: {
    color: 'maroon',
  },
  brownButton: {
    width: 100,
    height: 60,
    backgroundColor: 'seashell',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});
