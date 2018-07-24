import React from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Animated,
	Dimensions,
	StatusBar,
} from "react-native"
import * as Animatable from "react-native-animatable"

const { width, height } = Dimensions.get("window")

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		header: null,
	}

	constructor() {
		super()
		this.value = new Animated.Value(0)
	}

	componentWillMount() {
		this.loginHeight = new Animated.Value(300)
	}

	startAnimation = () => {
		Animated.timing(this.value, {
			toValue: 1,
			duration: 500,
		}).start()
	}

	increaseHeightOfLogin = () => {
		Animated.timing(this.loginHeight, {
			toValue: height,
			duration: 400,
		}).start()
	}

	decreaseHeightOfLogin = () => {
		Animated.timing(this.loginHeight, {
			toValue: 300,
			duration: 400,
		}).start()
	}

	render() {
		const newOpacity = this.value.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 0],
		})

		const headerTextOpacity = this.loginHeight.interpolate({
			inputRange: [300, height],
			outputRange: [1, 0],
		})

		const headerBackArrowOpacity = this.loginHeight.interpolate({
			inputRange: [300, height],
			outputRange: [0, 1],
		})

		const marginTop = this.loginHeight.interpolate({
			inputRange: [300, height],
			outputRange: [25, 100],
		})

		return (
			<Animated.View style={{ flex: 1, opacity: newOpacity }}>
				<Animated.View
					style={{
						position: "absolute",
						top: 60,
						left: 25,
						zIndex: 100,
						opacity: headerBackArrowOpacity, //Animated
					}}>
					<TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
						<View
							style={{
								height: 60,
								width: width,
							}}>
							<Text
								style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
								BACK
							</Text>
						</View>
					</TouchableOpacity>
				</Animated.View>
				<View style={{ flex: 1, backgroundColor: "#a9ffa9" }}>
					<View
						style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
						<Animatable.View
							animation="zoomIn"
							iterationCount={1}
							style={{
								backgroundColor: "white",
								width: 100,
								height: 100,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 26,
								}}>
								HELLO
							</Text>
						</Animatable.View>
					</View>
					<Animatable.View
						useNativeDriver={true}
						animation="slideInDown"
						iterationCount={1}>
						<Animated.View
							style={{
								backgroundColor: "white",
								height: this.loginHeight,
							}}>
							<Animated.View
								style={{
									opacity: headerTextOpacity, //Animated
									paddingHorizontal: 25,
									alignItems: "flex-start",
									marginTop: marginTop, // animated
								}}>
								<Text
									style={{ fontWeight: "bold", fontSize: 30, color: "blue" }}>
									HELLO
								</Text>
							</Animated.View>
							<TouchableOpacity onPress={() => this.startAnimation()}>
								<View
									style={{
										paddingHorizontal: 25,
										marginTop: 25, //animated
										flexDirection: "row",
									}}>
									<Text style={{ flex: 1, fontSize: 26, fontWeight: "bold" }}>
										Click
									</Text>
								</View>
							</TouchableOpacity>
						</Animated.View>
						<View
							style={{
								backgroundColor: "white",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Text style={{ fontWeight: "bold", color: "blue" }}>
								Or Get Lost
							</Text>
						</View>
					</Animatable.View>
				</View>
			</Animated.View>
		)
	}
}
