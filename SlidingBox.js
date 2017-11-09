import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Text,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class SlidingBox extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   slide: new Animated.ValueXY({ x: 0, y: 0 })
    // };

    // this.spinValue = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.opacityValue = new Animated.Value(0);

    // this.slideUp = Animated.timing(
    //   this.state.slide,
    //   {
    //     toValue: { x: 0, y: -height/1.15 },
    //     duration: 200,
    //     delay: 0,
    //     easing: Easing.linear
    //   }
    // );
    //
    // this.slideDown = Animated.timing(
    //  this.state.slide,
    //  {
    //   toValue: { x: 0, y: 0 },
    //   duration: 200,
    //   delay: 0,
    //   easing: Easing.linear
    //  }
    // );
  }

  shouldComponentUpdate(props) {
    // props.startAnimation ? this.slideUp.start() : this.slideDown.start();
    return true;
  }

  componentDidMount() {
    // this.spin();
    this.animate();
  }

  animate () {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear(Easing.ease)
      }
    ).start(() => this.animate());
  }

  opacity () {
    this.opacityValue.setValue(0);
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate());
  }

  // spin () {
  //   this.spinValue.setValue(0);
  //   Animated.timing(
  //     this.spinValue,
  //     {
  //       toValue: 1,
  //       duration: 4000,
  //       easing: Easing.linear
  //     }
  //   ).start(() => this.spin());
  // }

  render() {
    // const slideStyle = this.state.slide.getTranslateTransform();
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0,1],
    //   outputRange: ["0deg", "360deg"]
    // });

    // const marginLeft = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 300]
    // });
    // const opacity = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: [0, 1, 0]
    // });
    // const movingMargin = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: [0, 300, 0]
    // });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [width/5, width/2.5, width/2.5]
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [3, 0, 0]
    });
    // const rotateX = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: ['0deg', '180deg', '0deg']
    // });

    return(
      <View style={styles.container}>
        {/*<Animated.View*/}
          {/*style={{*/}
            {/*marginLeft,*/}
            {/*height: 30,*/}
            {/*width: 40,*/}
            {/*backgroundColor: 'red'}} />*/}
        {/*<Animated.View*/}
          {/*style={{*/}
            {/*opacity,*/}
            {/*marginTop: 10,*/}
            {/*height: 30,*/}
            {/*width: 40,*/}
            {/*backgroundColor: 'blue'}} />*/}
        {/*<Animated.View*/}
          {/*style={{*/}
            {/*marginLeft: movingMargin,*/}
            {/*marginTop: 10,*/}
            {/*height: 30,*/}
            {/*width: 40,*/}
            {/*backgroundColor: 'orange'}} />*/}
        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: textSize,
            height: textSize,
            borderRadius: width/5,
            borderWidth: opacity,
            borderColor: "#3FAAD3",
            }} >
          <View style={{ width:10, height: 10, backgroundColor: "#3FAAD3" }}/>
        </Animated.View>
        {/*<Animated.View*/}
          {/*style={{*/}
            {/*transform: [{rotateX}],*/}
            {/*marginTop: 50,*/}
            {/*height: 30,*/}
            {/*width: 40,*/}
            {/*backgroundColor: 'black'}}>*/}
          {/*<Text style={{color: 'white'}}>Hello from TransformX</Text>*/}
        {/*</Animated.View>*/}
        {/*<Animated.Image*/}
          {/*style={{*/}
            {/*width: 227,*/}
            {/*height: 200,*/}
            {/*transform: [{rotate: spin}]*/}
          {/*}}*/}
          {/*source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>*/}
      </View>
    );

    // return(
    //   <Animated.View style={[slideStyle, { top: height/1.15 }]}>
    //     {this.props.children}
    //   </Animated.View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});