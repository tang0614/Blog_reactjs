import React, { Component } from "react";
import Order from "../../../components/Checkout/Order/Order";
import instance from "../../../axios-order";
import withErrorHandler from "../../../hoc/withErrorHandler";
import { connect } from "react-redux";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    const query =
      `?auth=` +
      this.props.token +
      `&orderBy="userId"&equalTo="` +
      this.props.userId +
      `"`;

    instance
      .get(`/orders.json` + query)
      .then((res) => {
        let orders = [];
        for (let key in res.data) {
          orders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: orders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredient={order.ingredient}
            price={order.totalPrice}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(withErrorHandler(Orders, instance));
