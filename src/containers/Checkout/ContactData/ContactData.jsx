import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Classes from "./ContactData.module.css";
import instance from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";

class ContactData extends Component {
  state = {
    error: "",
    orderForm: {
      name: {
        elementName: "name",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementName: "email",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementName: "street",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      postCode: {
        elementName: "postCode",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Zip code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 10,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementName: "deliveryMethod",
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        validation: {
          required: true,
        },
        valid: true,
        touched: true,
      },
    },
    loading: false,
    formIsValid: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };
  onChange = (event, name) => {
    event.preventDefault();
    let orderForm = { ...this.state.orderForm };
    const value = event.target.value;
    orderForm[name].value = value;
    orderForm[name].valid = this.checkValidity(
      value,
      orderForm[name].validation
    );
    orderForm[name].touched = true;

    let formIsValid = true;
    for (let name in orderForm) {
      formIsValid = orderForm[name].valid && formIsValid;
    }
    this.setState({ orderForm, formIsValid });
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const newOrder = {
      customer: { ...this.state.orderForm },
      totalPrice: this.props.totalPrice,
      ingredient: this.props.ingredient,
      userId: this.props.userId,
    };

    instance
      .post("/orders.json", newOrder)
      .then((res) => {
        this.props.history.push("/");
        this.setState({ loading: false });
      })
      .catch((error) => this.setState({ loading: false }));
  };
  render() {
    let formArray = [];
    for (let key of Object.keys(this.state.orderForm)) {
      formArray.push(this.state.orderForm[key]);
    }
    const formInputs = formArray.map((element, id) => {
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

    let form = (
      <form onSubmit={this.orderHandler}>
        {formInputs}
        <Button btnType={"Success"} disable={!this.state.formIsValid}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={Classes.ContactData}>
        <h4>Enter your info</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredient: state.burgerBuilder.ingredient,
    totalPrice: state.burgerBuilder.totalPrice,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(withRouter(ContactData));
