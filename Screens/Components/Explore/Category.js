import React from "react"
import { View, Text } from "react-native"

export default class Category extends React.Component {
	render() {
		return (
			<View
				style={{
					height: 130,
					width: 130,
					marginLeft: 20,
					borderWidth: 0.5,
					borderColor: "#dddddd",
				}}>
				<View style={{ flex: 2 }}>
					<View style={{ backgroundColor: this.props.bg, flex: 1 }} />
				</View>
				<View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
					<Text>{this.props.name}</Text>
				</View>
			</View>
		)
	}
}
