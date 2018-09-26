import React, { Component } from "react";
import "./header.style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="overlay-down">
          <h1>I Am Ahmad Mostafa Al-Zoubi</h1>
          <h2>i am</h2>
          <h2>Full Stack developer</h2>,<br />
          <h2>Designer</h2>,<br />
          <h2>and Photographer</h2>
        </div>
      </div>
    );
  }
}
