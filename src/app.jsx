import React, { Component } from "react";
import Layout from "./containers/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Aux from "./hoc/aux";
import { Route, Switch, withRouter } from "react-router-dom";
import Orders from "./containers/Checkout/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/logout";
import { authCheckState } from "./store/auth";
import { connect } from "react-redux";
class app extends Component {
  componentDidMount() {
    this.props.autoSign();
  }

  render() {
    let routes;
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />

          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
        </Switch>
      );
    }
    return (
      <Layout>
        {
          <Aux>
            <Switch>{routes}</Switch>
          </Aux>
        }
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoSign: () => {
      dispatch(authCheckState());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
