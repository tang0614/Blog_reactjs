import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Summary from "../../components/Burger/Summary/Summary";
import instance from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Module from "../../components/UI/Model/Module";
import withErrorHandler from "../../hoc/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import * as actions from "../../store/auth";
class BurgerBuilder extends Component {
  state = {
    purchased: false,
    loading: false,
  };

  componentDidMount() {
    // instance
    //   .get("/ingredient.json")
    //   .then((res) => this.setState({ ingredient: res.data }))
    //   .catch((error) => console.log(error));
  }

  addIngredient = (type) => {
    const ingredient = { ...this.state.ingredient };
    ingredient[type] += 1;
    this.setState({ ingredient });
  };

  removeIngredient = (type) => {
    const ingredient = { ...this.props.ingredient };

    if (ingredient[type] <= 0) {
      return;
    }
    ingredient[type] -= 1;
    this.setState({ ingredient });
  };

  purchasing = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchased: true });
    } else {
      this.props.redirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };
  notPurchasing = () => {
    this.setState({ purchased: false });
  };

  submitBill = () => {
    // const disabledInfo = { ...this.props.ingredient };

    // for (let key in disabledInfo) {
    //   disabledInfo[key] = disabledInfo[key] <= 0;
    // }

    // this.setState({ loading: true });

    // const queryParams = [];
    // for (let key in this.props.ingredient) {
    //   queryParams.push(
    //     encodeURIComponent(key) +
    //       "=" +
    //       encodeURIComponent(this.props.ingredient[key])
    //   );
    // }
    // queryParams.push("price=" + this.props.totalPrice);
    // const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      // search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = { ...this.props.ingredient };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let purchasable = !(this.props.totalPrice > 4);

    let burger = <Spinner />;
    let summary = null;
    if (this.props.ingredient) {
      burger = (
        <Aux>
          {" "}
          <Burger ingredient={this.props.ingredient} />{" "}
          <BuildControls
            removeIngredient={this.props.removeIngredient}
            addIngredient={this.props.addIngredient}
            disabled={disabledInfo}
            purchased={this.state.purchased}
            purchasing={this.purchasing}
            purchasable={purchasable}
            isAuthenticated={this.props.isAuthenticated}
          />
        </Aux>
      );
      summary = (
        <Summary
          ingredients={this.props.ingredient}
          totalPrice={this.props.totalPrice}
          submitBill={() => this.submitBill(this.props.totalPrice)}
        />
      );
    }

    if (this.state.loading) {
      summary = <Spinner />;
    }

    return (
      <Aux>
        <p>{`Total Burger Price is ${this.props.totalPrice}`}</p>
        {burger}
        {
          <Backdrop close={this.notPurchasing} show={this.state.purchased}>
            <Module show={this.state.purchased}>{summary}</Module>
          </Backdrop>
        }
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredient: state.burgerBuilder.ingredient,
    totalPrice: state.burgerBuilder.totalPrice,
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, name: ingName }),
    removeIngredient: (ingName) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, name: ingName }),
    redirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, instance));
