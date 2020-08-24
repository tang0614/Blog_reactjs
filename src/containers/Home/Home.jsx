import Classes from "./Home.module.css";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import ImageLoading from "../../components/ImageLoading/ImageLoading";
import useFirestore from "../../hook/useFirestore";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className={Classes.Home}>
        <ImageLoading />
        <ImageGrid />
      </div>
    );
  }
}

export default Home;
