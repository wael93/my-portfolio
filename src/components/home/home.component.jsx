import React, { Component } from "react";
import "./home.style.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="home fade-slow">
          <img
            className="overlay"
            src="https://ak9.picdn.net/shutterstock/videos/1014503369/thumb/1.jpg"
            alt=""
          />
          <div className="grow-slow lighting">
            <h1 className="title">I AM</h1>
            <h1 className="title">AHMAD MOSTAFA AL-ZOUBI</h1>
            <h4 className="subtitle">Full Stack Developer</h4>
          </div>
          <img
            className="down-arrow"
            src="https://www.crucial.com.au/wp-content/uploads/2014/12/down-arrow-white.png"
            alt=""
          />
        </div>
      </React.Fragment>
    );
  }
}
