import React, { Component } from "react";

export default class Cube extends Component {
  render() {
    return (
      <div class="cube-wrap">
        <div class="cube">
          <div class="cube__front">front</div>
          <div class="cube__back">back</div>
          <div class="cube__top">top</div>
          <div class="cube__bottom">bottom</div>
          <div class="cube__left">left</div>
          <div class="cube__right">right</div>
        </div>
      </div>
    );
  }
}
