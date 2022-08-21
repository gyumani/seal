import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Style.scss";

export class Nav extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <header>
          <h1 id="logo">
            <a href="/web/main/index.html">Seal</a>
          </h1>
          <nav>
            <ul id="top_menu">
              <li className="sub_menu">
                <a href="/web/maps/index.html" id="maps_btn" className="icon">
                  <i className="far fa-map"></i>
                </a>
              </li>
              <li className="sub_menu">
                <a
                  href="/web/profile/index.html"
                  id="profile_btn"
                  className="icon"
                >
                  <i className="fas fa-user-circle"></i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
