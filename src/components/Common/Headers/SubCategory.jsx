import React, { Component } from 'react'

class SubCategory extends Component{
    render(){
        return(
            <div>
                 {/* Header Mobile */}
            <div className="wrap-header-mobile">
              {/* Logo moblie */}
              <div className="logo-mobile">
                <a href="index.html">
                  <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
                </a>
              </div>
              {/* Button show menu */}
              <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </div>
            </div>
            {/* Menu Mobile */}
            <div className="menu-mobile">
              <ul className="topbar-mobile">
                <li className="left-topbar">
                  <span className="left-topbar-item flex-wr-s-c">
                    <span>New York, NY</span>
                    <img
                      className="m-b-1 m-rl-8"
                      src="images/icons/icon-night.png"
                      alt="IMG"
                    />
                    <span>HI 58° LO 56°</span>
                  </span>
                </li>
                <li className="left-topbar">
                  <a href="#" className="left-topbar-item">
                    About
                  </a>
                  <a href="#" className="left-topbar-item">
                    Contact
                  </a>
                </li>
                <li className="right-topbar">
                  <a href="#">
                    <span className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <span className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <span className="fab fa-pinterest-p" />
                  </a>
                  <a href="#">
                    <span className="fab fa-vimeo-v" />
                  </a>
                  <a href="#">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
              <ul className="main-menu-m">
                <li>
                  <a href="index.html">Home</a>
                  <ul className="sub-menu-m">
                    <li>
                      <a href="index.html">Homepage v1</a>
                    </li>
                    <li>
                      <a href="home-02.html">Homepage v2</a>
                    </li>
                    <li>
                      <a href="home-03.html">Homepage v3</a>
                    </li>
                  </ul>
                  <span className="arrow-main-menu-m">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </span>
                </li>
                <li>
                  <a href="category-01.html">News</a>
                </li>
                <li>
                  <a href="category-02.html">Entertainment </a>
                </li>
                <li>
                  <a href="category-01.html">Business</a>
                </li>
                <li>
                  <a href="category-02.html">Travel</a>
                </li>
                <li>
                  <a href="category-01.html">Life Style</a>
                </li>
                <li>
                  <a href="category-02.html">Video</a>
                </li>
                <li>
                  <a href="#">Features</a>
                  <ul className="sub-menu-m">
                    <li>
                      <a href="category-01.html">Category Page v1</a>
                    </li>
                    <li>
                      <a href="category-02.html">Category Page v2</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog Grid Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-list-01.html">Blog List Sidebar v1</a>
                    </li>
                    <li>
                      <a href="blog-list-02.html">Blog List Sidebar v2</a>
                    </li>
                    <li>
                      <a href="blog-detail-01.html">Blog Detail Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-detail-02.html">Blog Detail No Sidebar</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <span className="arrow-main-menu-m">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </span>
                </li>
              </ul>
            </div>
            {/*  */}

            </div>
        )
    }
}

export default SubCategory;