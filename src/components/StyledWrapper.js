import React, { Component } from "react";

export default class StyledWrapper extends Component {
  render() {
    return (
      <div>
        <div className="styled-wrapper">
          <div className="styled-wrapper__main">
            {React.Children.map(this.props.children, child => {
              return child;
            })}
          </div>
        </div>
      </div>
    );
  }
}
