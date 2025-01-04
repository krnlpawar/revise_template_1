import React from "react";

export default function Slider() {
  return (
    <section className="slide-box">
      <div className="container">
        <div className="slide-wrap">
          <section className="navigation-box">
            <div className="nav-wrap">
              <input type="checkbox" name="" id="check" />

              <div className="logo-container">
                <h3 className="logo">
                  Brand <span>Name</span>
                </h3>
              </div>

              <div className="nav-btn">
                <div className="nav-links">
                  <ul>
                    <li className="nav-link">
                      <a href="#">Home</a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        Menu <i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">link-1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">link-2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              link-3 <i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">link-1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">link-2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">link-3</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">
                                    More <i className="fas fa-caret-down"></i>
                                  </a>
                                  <div className="dropdown second">
                                    <ul>
                                      <li className="dropdown-link">
                                        <a href="#">link-1</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">link-2</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">link-3 </a>
                                      </li>
                                      <div className="arrow"></div>
                                    </ul>
                                  </div>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">link-4</a>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        Services <i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">link-1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">link-2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              link-3 <i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">link-1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">link-2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">link-3</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">
                                    More <i className="fas fa-caret-down"></i>
                                  </a>
                                  <div className="dropdown second">
                                    <ul>
                                      <li className="dropdown-link">
                                        <a href="#">link-1</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">link-2</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">link-3 </a>
                                      </li>
                                      <div className="arrow"></div>
                                    </ul>
                                  </div>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">link-4</a>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-link">
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div className="log-sign">
                  <a href="#" className="btn transparent">
                    Log in
                  </a>
                  <a href="#" className="btn solid">
                    Sign up
                  </a>
                </div>
              </div>

              <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                  <div></div>
                </div>
              </div>
            </div>
          </section>
          <section className="overlay-box">
            <div className="overlay"></div>
          </section>
          <div className="slide-heading">
            <h1 className="slide-title">Web Design Lab</h1>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              excepturi laborum saepe deleniti est tempore necessitatibus
              corrupti, aperiam delectus sit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint, in?
            </p>
            <div className="slide-button">
              <button className="btn">More</button>
              <button className="btn">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
