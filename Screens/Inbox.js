import React from "react"
import { View, Text } from "react-native"

export default class Inbox extends React.Component {
	static navigationOptions = {
		header: null,
	}

	render() {
		return (
			<View>
				<Text>Inbox</Text>
			</View>
		)
	}
}
