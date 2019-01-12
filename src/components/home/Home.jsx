import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__menu-btn">
          <img src="/imgs/menu.svg" alt="" />
        </div>
        <div className="outlined home__text-wrapper zoomIn">
          <h1 className="text-display1">Hello</h1>
          <h2 className="text-display2">I'm <span className=""> Ahmad Mostafa </span></h2>
          <h2 className="text-display2">Full Stack Developer</h2>
          <img src="/imgs/illustration.jpg" alt="" />
        </div>
      </div>
    )
  }
}
