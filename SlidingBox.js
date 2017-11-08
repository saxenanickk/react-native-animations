import React from "react";
import {
  Animated,
  Easing
} from "react-native";

export default class SlidingBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slide: new Animated.ValueXY({ x: 0, y: 0 })
    };

    this.slideIn = Animated.timing(
      this.state.slide,
      {
        toValue: { x: 0, y: -200 },
        duration: 2000,
        delay: 1000,
        easing: Easing.in(Easing.ease)
      }
    );
  }

  shouldComponentUpdate(props) {
    props.startAnimation ? this.slideIn.start() : null;
  }

  componentDidMount() {
    
  }

  render() {
    const slideStyle = this.state.slide.getTranslateTransform();

    return(
      <Animated.View style={slideStyle}>
        {this.props.children}
      </Animated.View>
    );
  }
}