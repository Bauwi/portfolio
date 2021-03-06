import React from "react";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";

export default class AnimatedSwitch extends Switch {
  constructor(props) {
    super(props);
    this.state = {
      animate: new Animated.Value(0)
    };
  }
  componentWillAppear(cb) {
    console.log("componentWillAppear");
    setTimeout(
      () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
      250
    );
    cb();
  }
  componentWillEnter(cb) {
    console.log("componentWillEnter");
    setTimeout(
      () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
      250
    );
    cb();
  }
  componentWillLeave(cb) {
    console.log("componentWillLeave");
    Animated.spring(this.state.animate, { toValue: 0 }).start();
    setTimeout(() => cb(), 175);
  }
  render() {
    const style = {
      opacity: Animated.template`${this.state.animate}`,
      transform: Animated.template`
      translateX(${this.state.animate.interpolate({
        inputRange: [0, 1],
        outputRange: ["-2500px", "0px"]
      })}) 

      `
      // transform: Animated.template`
      // 	rotateY(${this.state.animate.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: ["-400deg", "0deg"]
      //   })},0,0)
      // `
    };
    return (
      <Animated.div style={style} className="animated-page-wrapper">
        {super.render()}
      </Animated.div>
    );
  }
}
