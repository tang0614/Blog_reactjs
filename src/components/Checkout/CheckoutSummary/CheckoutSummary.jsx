import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Classes from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CheckoutSummary extends Component {
  cancelHandler = () => {
    this.props.history.goBack();
  };
  continueHandler = () => {
    this.props.history.push("/checkout/data");
  };

  render() {
    return (
      <div className={Classes.CheckoutSummary}>
        <h2>We hope it tastes well</h2>
        <div style={{ width: "100%" }}>
          <Burger ingredient={this.props.ingredient} />
        </div>
        <Button btnType="Danger" onClick={this.cancelHandler}>
          Cancel this order
        </Button>
        <Button btnType="Success" onClick={this.continueHandler}>
          Confirm & Continue
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredient: state.burgerBuilder.ingredient,
  };
};

export default connect(mapStateToProps)(withRouter(CheckoutSummary));
