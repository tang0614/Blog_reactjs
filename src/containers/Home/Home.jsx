import Classes from "./Home.module.css";
// import ImageGrid from "../../components/ImageGrid/ImageGrid";
// import ImageLoading from "../../components/ImageLoading/ImageLoading";
// import useFirestore from "../../hook/useFirestore";

import React, { Component } from "react";
import SideBar from "../../components/SideBar/SideBar";

class Home extends Component {
  render() {
    return (
      <div className={Classes.Home}>
        {/* <ImageLoading />
        <ImageGrid /> */}

        <main className={Classes.Main}>
          <article className={Classes.Article}>
            <div className={Classes.ArticleMain}>
              <strong>Keep cooking simple</strong>
              <p>
                Food is very important part of everyone's life. If you want to
                be health, you have to eat healthy. One of the easiest ways to
                do that is to keep your cooking nice.
              </p>
              <a className={Classes.ArticleAnchor}>Continue Reading</a>
            </div>
            <div className={Classes.ArticleSecondary}>
              <img
                src={require(`../../image/Cooking.png`)}
                className={Classes.ArticleImage}
              />
              <div className={Classes.Button}>
                <button className={Classes.Text}>Live</button>
                <button className={Classes.Text}>Github</button>
              </div>

              <div>
                <p>React</p>
                <p>Redux</p>
                <p>Nodejs</p>
                <p>Express</p>
                <p>Mongodb</p>
              </div>
            </div>
          </article>
        </main>

        <aside className={Classes.Side}>
          <SideBar />
        </aside>
      </div>
    );
  }
}

export default Home;
