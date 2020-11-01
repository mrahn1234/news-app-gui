import React, { Component } from "react";

class CommonNews extends Component {
  render() {
    return (
      <section className="bg0 p-t-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="p-b-20">
                {/* Entertainment */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* Brand tab */}
                    <h3 className="f1-m-2 cl12 tab01-title">Entertainment</h3>
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab1-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-2"
                          role="tab"
                        >
                          Celebrity
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-3"
                          role="tab"
                        >
                          Movies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-4"
                          role="tab"
                        >
                          Music
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab1-5"
                          role="tab"
                        >
                          Games
                        </a>
                      </li>
                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>
                    {/*  */}
                    <a
                      href="category-01.html"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right" />
                    </a>
                  </div>
                  {/* Tab panes */}
                  <div className="tab-content p-t-35">
                    {/* - */}
                    <div
                      className="tab-pane fade show active"
                      id="tab1-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-05.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-06.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-07.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-08.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab1-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-09.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-08.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-06.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-07.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab1-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-08.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-07.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-06.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-05.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab1-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-06.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-09.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-07.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-08.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab1-5" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-07.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-08.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-06.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-09.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Business */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl2 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* Brand tab */}
                    <h3 className="f1-m-2 cl13 tab01-title">Business</h3>
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab2-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab2-2"
                          role="tab"
                        >
                          Finance
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab2-3"
                          role="tab"
                        >
                          Money &amp; Markets
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab2-4"
                          role="tab"
                        >
                          Small Business
                        </a>
                      </li>
                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>
                    {/*  */}
                    <a
                      href="category-01.html"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right" />
                    </a>
                  </div>
                  {/* Tab panes */}
                  <div className="tab-content p-t-35">
                    {/* - */}
                    <div
                      className="tab-pane fade show active"
                      id="tab2-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-10.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-11.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-12.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-13.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money &amp; Markets
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab2-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-13.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-12.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-11.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-10.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money &amp; Markets
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab2-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-11.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-12.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-13.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-10.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money &amp; Markets
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab2-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-12.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-13.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-10.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-11.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money &amp; Markets
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Travel */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl3 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* Brand tab */}
                    <h3 className="f1-m-2 cl14 tab01-title">Travel</h3>
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab3-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-2"
                          role="tab"
                        >
                          Hotels
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-3"
                          role="tab"
                        >
                          Flight
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-4"
                          role="tab"
                        >
                          Beachs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab3-5"
                          role="tab"
                        >
                          Culture
                        </a>
                      </li>
                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>
                    {/*  */}
                    <a
                      href="category-01.html"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right" />
                    </a>
                  </div>
                  {/* Tab panes */}
                  <div className="tab-content p-t-35">
                    {/* - */}
                    <div
                      className="tab-pane fade show active"
                      id="tab3-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-14.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-15.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-16.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-17.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab3-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-15.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-16.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-17.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-18.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab3-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-16.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-17.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-18.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-14.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab3-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-17.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-18.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-14.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-15.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="tab3-5" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-18.jpg" alt="IMG" />
                            </a>
                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-17.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-16.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>
                          {/* Item post */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="images/post-15.jpg" alt="IMG" />
                            </a>
                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>
                              <span className="cl8">
                                <a
                                  href="#"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>
                                <span className="f1-s-3 m-rl-3">-</span>
                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-4">
              <div className="p-l-10 p-rl-0-sr991 p-b-20">
                {/*  */}
                <div>
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Most Popular</h3>
                  </div>
                  <ul className="p-t-35">
                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        1
                      </div>
                      <a
                        href="#"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        2
                      </div>
                      <a
                        href="#"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Proin velit consectetur non neque
                      </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        3
                      </div>
                      <a
                        href="#"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Nunc vestibulum, enim vitae condimentum volutpat
                        lobortis ante
                      </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        4
                      </div>
                      <a
                        href="#"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Proin velit justo consectetur non neque elementum
                      </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                        5
                      </div>
                      <a
                        href="#"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Proin velit consectetur non neque
                      </a>
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="flex-c-s p-t-8">
                  <a href="#">
                    <img
                      className="max-w-full"
                      src="images/banner-02.jpg"
                      alt="IMG"
                    />
                  </a>
                </div>
                {/*  */}
                <div className="p-t-50">
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Stay Connected</h3>
                  </div>
                  <ul className="p-t-35">
                    <li className="flex-wr-sb-c p-b-20">
                      <a
                        href="#"
                        className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0"
                      >
                        <span className="fab fa-facebook-f" />
                      </a>
                      <div className="size-w-3 flex-wr-sb-c">
                        <span className="f1-s-8 cl3 p-r-20">6879 Fans</span>
                        <a
                          href="#"
                          className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                        >
                          Like
                        </a>
                      </div>
                    </li>
                    <li className="flex-wr-sb-c p-b-20">
                      <a
                        href="#"
                        className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0"
                      >
                        <span className="fab fa-twitter" />
                      </a>
                      <div className="size-w-3 flex-wr-sb-c">
                        <span className="f1-s-8 cl3 p-r-20">568 Followers</span>
                        <a
                          href="#"
                          className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                        >
                          Follow
                        </a>
                      </div>
                    </li>
                    <li className="flex-wr-sb-c p-b-20">
                      <a
                        href="#"
                        className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0"
                      >
                        <span className="fab fa-youtube" />
                      </a>
                      <div className="size-w-3 flex-wr-sb-c">
                        <span className="f1-s-8 cl3 p-r-20">
                          5039 Subscribers
                        </span>
                        <a
                          href="#"
                          className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                        >
                          Subscribe
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CommonNews;