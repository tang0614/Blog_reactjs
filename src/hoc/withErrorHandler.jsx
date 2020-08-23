import React, { Component } from "react";
import Module from "../components/UI/Model/Module";
import Aux from "./aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class Handler extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        }
      );
    }
    componentWillUnmount() {
      console.log("will unmount", this.requestInterceptor);
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.request.eject(this.responseInterceptor);
    }
    errorHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Module show={this.state.error} close={this.errorHandler}>
            {this.state.error ? this.state.error.message : null}
          </Module>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
