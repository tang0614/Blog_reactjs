import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class tag extends Component {
  render() {
    return (
      <NavLink
        to={`./${this.props.path}`}
        className={this.props.nav_link_style}
      >
        {this.props.name}
      </NavLink>
    );
  }
}

export default tag;
