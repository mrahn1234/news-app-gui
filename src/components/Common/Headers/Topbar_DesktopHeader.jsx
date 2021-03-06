import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topbar_DestopHeader extends Component {
  render() {
    return (
      <div>
        {/* Topbar */}
        <div className="topbar">
          <div className="content-topbar container h-100">
            <div className="left-topbar">
              <span className="left-topbar-item flex-wr-s-c">
                <span>Viet Nam</span>
                <img
                  className="m-b-1 m-rl-8"
                  src="images/icons/icon-night.png"
                  alt="IMG"
                />
                <span>HI 58° LO 56°</span>
              </span>
              <a href="https://fb.com/mrahn123" className="left-topbar-item">
                {"Liên hệ"}
              </a>
            </div>
            <div className="right-topbar">
              <a href="https://fb.com/mrahn123">
                <span className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/pyzchannn/">
                <span className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/HongTL2">
                <span className="fab fa-twitter" />
              </a>
              <a href="https://www.youtube.com/channel/UCrhndpCQcpdv8ADTTcgHRbQ?view_as=subscriber">
                <span className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-logo container">
          {/* Logo desktop */}
          <div className="logo">
            <Link to="/">
              <img src="images/logoSTE.png" alt="LOGO" style={{height: "110px", width: "100%" }} />
            </Link>
          </div>
          {/* Banner */}
          <div className="banner-header">
            <a href="#">
              <img src="images/banner-01.jpg" alt="IMG" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar_DestopHeader;
