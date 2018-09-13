import React from "react";
import { View, Text, Animated } from "react-native";

export default class Loader extends React.Component {
	constructor() {
		super();
		this.state = {
			animatedValue: new Animated.Value(0)
		};
	}

	zeroToOne() {
		this.state.animatedValue.setValue(0);
		Animated.timing(this.state.animatedValue, {
			toValue: 1,
			duration: 1000
		}).start(() => this.zeroToOne());
	}

	oneToZero() {
		Animated.timing(this.state.animatedValue, {
			toValue: 0,
			duration: 1000
		}).start(() => this.zeroToOne());
	}

	componentDidMount() {
		this.zeroToOne();
	}

	render() {
		console.log("Hello");
		return (
			<View
				style={{
					width: 200,
					position: "relative",
					height: 200,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
					// transform: [
					// 	{
					// 		rotate: this.state.animatedValue.interpolate({
					// 			inputRange: [0, 1],
					// 			outputRange: ["0deg", "360deg"]
					// 		})
					// 	}
					// ]
				}}
			>
				<Animated.View
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						borderTopWidth: 2,
						borderTopColor: "#3498db"
					}}
				/>
				<Animated.View
					style={{
						position: "absolute",
						width: 90,
						height: 90,
						borderRadius: 45,
						borderTopWidth: 2,
						borderTopColor: "#e74c3c",
						transform: [
							{
								rotate: this.state.animatedValue.interpolate({
									inputRange: [0, 1],
									outputRange: ["0deg", "360deg"]
								})
							}
						]
					}}
				/>
				<Animated.View
					style={{
						position: "absolute",
						width: 80,
						height: 80,
						borderRadius: 40,
						borderTopWidth: 2,
						borderTopColor: "#f9c922",
						alignSelf: "center"
					}}
				/>
			</View>
		);
	}
}
