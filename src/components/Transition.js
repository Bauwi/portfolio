import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default class Transition extends Component {
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child, i) => {
          console.log(i);
          console.log(child);
          const transitionName = `${this.props.name}-${i + 1}`;
          return (
            <CSSTransitionGroup
              transitionName={transitionName}
              transitionAppear={true}
              transitionAppearTimeout={2000 * (i + 1)}
              transitionEnter={false}
              transitionLeave={false}
            >
              {child}
            </CSSTransitionGroup>
          );
        })}
      </div>
    );
  }
}
