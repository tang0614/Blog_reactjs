import React, { Component } from "react";

const AsyncCompo = (importComp) => {
  return class something extends Component {
    state = {
      component: null,
    };
    componentDidMount() {
      importComp().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default AsyncCompo;
