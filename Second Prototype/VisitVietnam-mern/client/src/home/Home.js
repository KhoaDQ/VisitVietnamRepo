import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/base.css";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Container Home">
        <div id="slider" className="Banner">
          <div className="text-content">
            <div className="text-heading">Home</div>
            <div className="text-desc">
              We provide the most important information and useful guidance to
              make your trip to Vietnam comfortable and smooth. I'm sure we're
              giving you what you really need
            </div>
          </div>
        </div>

        <div className="Container-background pt-5 pb-5">
          <div className="Container__Content">This is Content of Home Page</div>
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}
