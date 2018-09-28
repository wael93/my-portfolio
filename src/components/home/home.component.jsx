import React, { Component } from "react";
import "./home.style.css";
import Header from "../header/header.component";
import Mystory from "../mystory/mystory.component";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.onscroll = this.translateHeaderImg;
  }

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
        <div className="line-drop">
          <div className="ver-line" />
          <div className="drop" />
        </div>
        <Mystory />
      </div>
    );
  }
}
