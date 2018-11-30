import React from "react";
import {
	View,
	FlatList,
	Dimensions,
	TouchableOpacity,
	LayoutAnimation,
	UIManager,
	Platform
} from "react-native";
import Loader from "./Components/Loader";

const { width, height } = Dimensions.get("window");

export default class Trips extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor() {
		super();
		this.state = {
			selectedIndex: null
		};
		if (Platform.OS === "android") {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		this.data = ["1", "2", "3", "4", "5", "6"];
	}

	clickHandlers = {};

	getClickHandler = key => {
		if (!Object.prototype.hasOwnProperty.call(this.clickHandlers, key)) {
			this.clickHandlers[key] = () => {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				if (this.state.selectedIndex === key)
					this.setState({
						selectedIndex: null
					});
				else
					this.setState({
						selectedIndex: key
					});
			};
		}
		return this.clickHandlers[key];
	};

	shouldComponentUpdate(props, state) {
		console.log(state);
		if (state.selectedIndex !== this.state.selectedIndex) {
			this.scrollToIndex(state.selectedIndex);
		}
		return true;
	}

	scrollToIndex = index => {
		this.flatListRef.scrollToIndex({
			animated: true,
			index: index
		});
	};

	renderItem = data => {
		return (
			<TouchableOpacity
				key={data.index}
				activeOpacity={1}
				onPress={this.getClickHandler(data.index)}
				style={{
					elevation: this.state.selectedIndex === data.index ? 5 : 0,
					flex: 1,
					margin: width / 25,
					height:
						this.state.selectedIndex === data.index
							? height / 1.5
							: height / 12,
					backgroundColor: "#ffffff",
					borderWidth: 2
				}}
			>
				<View />
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View
				style={{ flex: 1, alignItems: "center", backgroundColor: "#ff0000" }}
			>
				<FlatList
					ref={ref => {
						this.flatListRef = ref;
					}}
					keyExtractor={data => data.key}
					contentContainerStyle={{ width: width }}
					data={this.data}
					snapToAlignment={"center"}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}
