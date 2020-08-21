import React, { Component } from "react";
import Classes from "./Auth.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import * as actions from "../../store/auth";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";
class Auth extends Component {
  state = {
    signForm: {
      email: {
        elementName: "email",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementName: "password",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    isSignUp: true,
  };
  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirect !== "/") {
      this.props.redirectPath();
    }
  }
  switch = () => {
    this.setState((preState) => {
      return { isSignUp: !preState.isSignUp };
    });
  };
  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /.+@.+\.[A-Za-z]+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  onChange = (event, name) => {
    event.preventDefault();
    let signForm = { ...this.state.signForm };
    const value = event.target.value;
    signForm[name].value = value;
    signForm[name].valid = this.checkValidity(value, signForm[name].validation);
    signForm[name].touched = true;

    let formIsValid = true;
    for (let name in signForm) {
      formIsValid = signForm[name].valid && formIsValid;
    }
    this.setState({ signForm, formIsValid });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.signForm.email.value,
      this.state.signForm.password.value,
      this.state.isSignUp
    );
  };

  render() {
    let formArray = [];
    for (let key of Object.keys(this.state.signForm)) {
      formArray.push(this.state.signForm[key]);
    }

    let formInputs = formArray.map((element, id) => {
      return (
        <Input
          valid={element.valid}
          touched={element.touched}
          key={id}
          elementName={element.elementName}
          elementConfig={element.elementConfig}
          elementType={element.elementType}
          value={element.value}
          onChange={(event) => this.onChange(event, element.elementName)}
        />
      );
    });

    if (this.props.loading) {
      formInputs = <Spinner />;
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    let redirect = null;
    if (this.props.isAuthenticated) {
      redirect = <Redirect to={this.props.authRedirect} />;
    }
    return (
      <div className={Classes.Auth}>
        {redirect}
        {errorMessage}

        <form onSubmit={this.submitHandler}>
          {formInputs}
          <Button btnType={"Success"} disable={!this.state.formIsValid}>
            {"Submit"}
          </Button>
        </form>
        <Button btnType="Danger" onClick={this.switch}>
          SWITCH TO {this.state.isSignUp ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirect: state.auth.redirect,
  };
};
const mapDiapatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    redirectPath: () => {
      dispatch(actions.setAuthRedirectPath("/"));
    },
  };
};

export default connect(mapStateToProps, mapDiapatchToProps)(Auth);
