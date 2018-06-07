import React, { Component } from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"
import { StackNavigator, createBottomTabNavigator } from "react-navigation"
import LoginScreen from "./Screens/LoginScreen"
import Explore from "./Screens/Explore"
import Inbox from "./Screens/Inbox"
import Trips from "./Screens/Trips"
import Saved from "./Screens/Saved"

const { height, width } = Dimensions.get("window")

export default class App extends Component {
	render() {
		return <AppNavigator />
	}
}

const AppNavigator = StackNavigator({
	LoginScreen: { screen: LoginScreen },
})

createBottomTabNavigator(
	{
		Explore: {
			screen: Explore,
			navigationOptions: {
				tabBarLabel: "EXPLORE",
			},
		},
		Inbox: {
			screen: Inbox,
			navigationOptions: {
				tabBarLabel: "INBOX",
			},
		},
		Trips: {
			screen: Trips,
			navigationOptions: {
				tabBarLabel: "TRIPS",
			},
		},
		Saved: {
			screen: Saved,
			navigationOptions: {
				tabBarLabel: "SAVED",
			},
		},
	},
	{
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: "red",
			inactiveTintColor: "grey",
			style: {
				backgroundColor: "white",
				borderTopWidth: 0,
				shadowOffset: { width: 5, height: 3 },
				shadowColor: "black",
				shadowOpacity: 0.5,
				elevation: 5,
			},
		},
	},
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
	},
})
