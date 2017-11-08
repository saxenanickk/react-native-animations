import React from "react";
import {
  Animated,
  Easing,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class SlidingBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slide: new Animated.ValueXY({ x: 0, y: 0 })
    };

    this.slideUp = Animated.timing(
      this.state.slide,
      {
        toValue: { x: 0, y: -height/1.15 },
        duration: 200,
        delay: 0,
        easing: Easing.linear(Easing.ease)
      }
    );

		this.slideDown = Animated.timing(
			this.state.slide,
			{
				toValue: { x: 0, y: 0 },
				duration: 200,
				delay: 0,
				easing: Easing.linear(Easing.ease)
			}
		);
  }

  shouldComponentUpdate(props) {
    props.startAnimation ? this.animate() : this.slideDown.start();
    return true;
  }

  animate = () => {
		this.slideUp.start();
		setTimeout(() => {
			this.props.callbackAnimation();
		}, 3000);
	}

  componentDidMount() {
    
  }

  render() {
    const slideStyle = this.state.slide.getTranslateTransform();

    return(
      <Animated.View style={[slideStyle, { top: height/1.15 }]}>
        {this.props.children}
      </Animated.View>
    );
  }
}