import React, { Component } from "react";

export default class Store extends Component {
  state = {
    storeClassname: "store"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ storeClassname: "store store--after" }));
    }, 100);
  }

  render() {
    return <div className={this.state.storeClassname} />;
  }
}
