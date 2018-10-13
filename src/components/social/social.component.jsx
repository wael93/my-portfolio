import React, { Component } from "react";
import "./social.style.css";

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <ul>
          <li data-aos="fade-down-right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/z3by/"
            >
              <i className="fab fa-github-square" />
            </a>
          </li>

          <li data-aos="fade-down-right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/z3bya.ahmad"
            >
              <i className="fab fa-facebook-square" />
            </a>
          </li>

          <li data-aos="fade-down-right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/z3bya"
            >
              <i className="fab fa-twitter-square" />
            </a>
          </li>
        </ul>
        <ul>
          <li data-aos="fade-down-left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/z3bya/"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>

          <li data-aos="fade-down-left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+962777717358"
            >
              <i className="fab fa-whatsapp-square" />
            </a>
          </li>

          <li data-aos="fade-down-left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/z3bya/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
