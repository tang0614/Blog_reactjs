import React, { Component } from "react";
import { logout } from "../../../store/auth";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
