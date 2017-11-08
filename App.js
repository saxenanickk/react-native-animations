/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Dimensions,
	TextInput,
	BackHandler
} from 'react-native';

const  { height, width } = Dimensions.get("window");
import SlidingBox from "./SlidingBox";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false
    };
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick);
	}

  handleBackButtonClick = () => {
  	this.setState({ startAnimation: false });
		return true;
	}

  render() {
    return (
      <View style={styles.container}>
        <SlidingBox startAnimation={this.state.startAnimation}>
					{!this.state.startAnimation ?
					<Text onPress={() => this.setState({ startAnimation: true })} style={styles.welcome}>
            Click Here
          </Text>:
					<View style={{ borderWidth:1, borderColor: "#000000", margin: 10 }}>
						<TextInput placeHolder={"Origin"} />
						<TextInput placeHolder={"Destination"}/>
						<Text>Press Back Button to go to previous state.</Text>
					</View>}
        </SlidingBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderColor: "#000000"
  }
});
