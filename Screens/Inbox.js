import React from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

export default class Inbox extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor() {
		super();
		this.clicked = true;
		this.animatedValue = new Animated.Value(0);
	}

	upAnimation = () => {
		this.clicked = false;
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 300
		}).start();
	};

	downAnimation = () => {
		this.clicked = true;
		Animated.timing(this.animatedValue, {
			toValue: 0,
			duration: 300
		}).start();
	};

	render() {
		const viewHeight = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [0.5, 0.7]
		});
		const firstFlex = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [1, 0, 0]
		});
		const secondFlex = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0, 1, 1]
		});
		const firstOpacity = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 0]
		});
		const secondOpacity = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: "#dfdfdf",
					justifyContent: "flex-end"
				}}
			>
				<Animated.View
					style={{
						backgroundColor: "#ffffff",
						elevation: 10,
						flex: viewHeight,
						bottom: 0
					}}
				>
					<Animated.View
						style={{
							flex: firstFlex,
							backgroundColor: "red",
							opacity: firstOpacity,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<TouchableOpacity
							style={{
								flex: 0.2
							}}
							onPress={() => {
								if (this.clicked) this.upAnimation();
								else this.downAnimation();
							}}
						>
							<Text>Click</Text>
						</TouchableOpacity>
					</Animated.View>
					<Animated.View
						style={{
							flex: secondFlex,
							backgroundColor: "green",
							opacity: secondOpacity,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<TouchableOpacity
							style={{
								flex: 0.2
							}}
							onPress={() => {
								if (this.clicked) this.upAnimation();
								else this.downAnimation();
							}}
						>
							<Text>Click</Text>
						</TouchableOpacity>
					</Animated.View>
				</Animated.View>
			</View>
		);
	}
}
