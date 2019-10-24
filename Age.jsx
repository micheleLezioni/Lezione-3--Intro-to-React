import React, { Component } from "react";

export default class Age extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <p className="salima">Ho più di {this.props.age} anni e posso guidare </p>
    );
  }
}
