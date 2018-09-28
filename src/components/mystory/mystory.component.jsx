import React, { Component } from "react";
import "./mystory.style.css";

export default class Mystory extends Component {
  render() {
    return (
      <div className="mystory">
        <div className="story">
          <div data-aos="fade-up-left" className="story-part-1">
            <p>since i was 12 years old i fall in love with computer</p>
            <img src="/imgs/love-computer.png" alt="" />
          </div>

          <div data-aos="fade-up-right" className="story-part-1">
            <p>now i am older and my love still growning as i grow</p>
            <img src="/imgs/me-computer.jpg" alt="" />
          </div>
        </div>

        <h2>in 2013 i fled from my country because of the war</h2>
        <img src="/imgs/rocket.png" alt="" className="rocket" />
        <img src="/imgs/running.gif" alt="" className="running" />

        <h2>i couldn't continue my high school because i needed to work</h2>
        <img src="/imgs/work.gif" alt="" className="work" />
      </div>
    );
  }
}
