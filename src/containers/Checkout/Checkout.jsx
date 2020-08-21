import React, { Component } from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";
import Aux from "../../hoc/aux";

class Checkout extends Component {
  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredient = {};
  //   let price;
  //   for (let param of query.entries()) {
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredient[[param[0]]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredient, price });
  // }
  render() {
    return (
      <Aux>
        <CheckoutSummary />
        <Route path={this.props.match.path + "/data"} component={ContactData} />
      </Aux>
    );
  }
}

export default Checkout;
