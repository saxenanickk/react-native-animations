import React from "react"
import { View, Text } from "react-native"

export default class Trips extends React.Component {
	static navigationOptions = {
		header: null,
	}

	render() {
		return (
			<View>
				<Text>Trips</Text>
			</View>
		)
	}
}
