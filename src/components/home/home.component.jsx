import React, { Component } from "react";
import "./home.style.css";
import Header from "../header/header.component";
import Social from "../social/social.component";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.onscroll = this.onScroll;
  }

  onScroll = e => {
    this.translateHeaderImg(e);
    if (window.innerHeight === window.pageYOffset) {
      this.showDownloadBtn();
    } else {
      this.hideDownloadBtn();
    }
  };

  showDownloadBtn = () => {
    document.querySelector(".drop").classList.add("show-btn");
  };

  hideDownloadBtn = () => {
    if (document.querySelector(".drop").classList.contains("show-btn")) {
      document.querySelector(".drop").classList.remove("show-btn");
    }
  };

  translateHeaderImg = e => {
    document.querySelector(".overlay-down").style.backgroundPositionY =
      window.scrollY / 20 + "px";
    document.querySelector(".overlay-down").style.filter =
      "grayscale(" + window.scrollY / 5 + "%)";

    document.querySelector(".ver-line").style.height =
      window.scrollY * 0.7 + "px";
  };

  render() {
    return (
      <div className="home">
        <Header />
        <Social />
        <div className="line-drop">
          <div className="ver-line" />
          <div className="drop">
            <a
              className="download-btn-text"
              target="_blanck"
              href="https://drive.google.com/file/d/1ZkdFAaNuawv8VD7Tx9Wbt5Sc0AmYY91Z/view?usp=sharing"
            >
              download my resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}
