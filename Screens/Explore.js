import React from "react"
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	Platform,
	StatusBar,
	ScrollView,
	Dimensions,
	Animated,
} from "react-native"
import Category from "./Components/Explore/Category"
import Home from "./Components/Explore/Home"
import Tag from "./Components/Explore/Tag"

const { width, height } = Dimensions.get("window")

export default class Explore extends React.Component {
	static navigationOptions = {
		header: null,
	}

	componentWillMount() {
		this.startHeaderHeight = 80
		if (Platform.OS == "android")
			this.startHeaderHeight = 100 + StatusBar.currentHeight
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<View
						style={{
							height: this.startHeaderHeight,
							backgroundColor: "white",
							borderBottomWidth: 2,
							borderBottomColor: "#dddddd",
						}}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								padding: 10,
								backgroundColor: "white",
								marginHorizontal: 20,
								elevation: 1,
								marginTop: Platform.OS == "android" ? 30 : null,
							}}>
							<Text>Search</Text>
							<TextInput
								underlineColorAndroid={"transparent"}
								placeholder={"Try New Delhi"}
								placeholderTextColor={"grey"}
								style={{
									flex: 1,
									fontWeight: "700",
									backgroundColor: "white",
								}}
							/>
						</View>
						<Animated.View
							style={{
								flexDirection: "row",
								marginHorizontal: 20,
								position: "relative",
								top: 10,
							}}>
							<Tag name={"Guests"} />
							<Tag name={"Dates"} />
						</Animated.View>
					</View>
					<ScrollView scrollEventThrottle={16}>
						<View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
							<Text
								style={{
									fontSize: 24,
									fontWeight: "700",
									paddingHorizontal: 20,
								}}>
								What can we help you find, Nikhil?
							</Text>
							<View
								style={{
									height: 130,
									marginTop: 30,
								}}>
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}>
									<Category name={"Home"} bg={"black"} />
									<Category name={"Experiences"} bg={"grey"} />
									<Category name={"Restaurant"} bg={"green"} />
								</ScrollView>
							</View>
							<View style={{ marginTop: 20, paddingHorizontal: 20 }}>
								<Text style={{ fontSize: 24, fontWeight: "700" }}>
									Introducing Airbnb Plus
								</Text>
								<Text style={{ marginTop: 10, fontWeight: "100" }}>
									A new selection of homes verified for quality & comfort
								</Text>
								<View
									style={{
										borderRadius: 3,
										width: width - 40,
										height: 200,
										marginTop: 20,
										backgroundColor: "brown",
									}}
								/>
							</View>
						</View>
						<View style={{ marginTop: 40 }}>
							<Text
								style={{
									fontSize: 24,
									fontWeight: "700",
									paddingHorizontal: 20,
								}}>
								Homes around the world
							</Text>
							<View
								style={{
									paddingHorizontal: 20,
									marginTop: 20,
									flexDirection: "row",
									flexWrap: "wrap",
									justifyContent: "space-between",
								}}>
								<Home
									width={width}
									name={"The Cozy Palace"}
									type={"PRIVATE ROOM - 2 BEDS"}
									price={"82$"}
								/>
								<Home
									width={width}
									name={"The Cozy Palace"}
									type={"PRIVATE ROOM - 2 BEDS"}
									price={"82$"}
								/>
								<Home
									width={width}
									name={"The Cozy Palace"}
									type={"PRIVATE ROOM - 2 BEDS"}
									price={"82$"}
								/>
								<Home
									width={width}
									name={"The Cozy Palace"}
									type={"PRIVATE ROOM - 2 BEDS"}
									price={"82$"}
								/>
							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		)
	}
}
