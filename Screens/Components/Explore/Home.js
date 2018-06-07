import React from "react"
import { View, Text } from "react-native"

export default class Home extends React.Component {
	render() {
		return (
			<View
				style={{
					width: this.props.width / 2 - 30,
					height: this.props.width / 2 - 30,
					borderWidth: 0.5,
				}}>
				<View style={{ flex: 1 }}>
					<View
						style={{
							flex: 1,
							backgroundColor: "black",
						}}
					/>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: "flex-start",
						justifyContent: "space-around",
						paddingLeft: 10,
					}}>
					<Text style={{ fontSize: 10, color: "#b63838" }}>
						{this.props.type}
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{this.props.name}
					</Text>
					<Text
						style={{
							fontSize: 10,
						}}>
						{this.props.price}
					</Text>
					<Text
						style={{
							fontSize: 12,
						}}>
						* * * *
					</Text>
				</View>
			</View>
		)
	}
}
