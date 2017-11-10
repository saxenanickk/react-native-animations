import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Text,
  Dimensions,
  PanResponder,
} from "react-native";

const { width, height } = Dimensions.get("window");

var xVal = 100;

export default class SlidingBox extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   slide: new Animated.ValueXY({ x: 0, y: 0 })
    // };
    this.state ={
      xVal:height-100,
      right:10,
      width:width-20,
    }
    // this.spinValue = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.opacityValue = new Animated.Value(0);
    this.heightValue = new Animated.Value(0);

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

  componentWillMount() {
    lol = 'lol'
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('started');
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState);
        this.setState({xVal:gestureState.moveY})
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (this.state.xVal < height/2) {
          this.setState(
            {
              xVal:0,
              width:width,
              right:0,
            }
          );
        }
        else {
          this.setState(
            {
              xVal:height-100,
              width:width-20,
              right:10,
            }
          );
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }
  componentDidMount() {
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
        duration: 15000,
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
    console.log(lol);
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
        <View
          {...this._panResponder.panHandlers}
          style={[{
            flex:1,
            flexDirection:'row',
            alignSelf:'baseline',
            position:'absolute',
          }, {
            top:this.state.xVal,
            right: this.state.right,
          }]}>
          <Animated.View
          style={{
            height:height-this.state.xVal,
            width:this.state.width,
            alignSelf:'center',
            justifyContent:'center',
            backgroundColor:"#235445",
          }}>
            <Text style={{alignSelf:'center'}}>Footer</Text>
          </Animated.View>
        </View>
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
