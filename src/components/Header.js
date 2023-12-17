import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="mobile-top-panel"></div>
      <div className="mobile-top-panel__fixed">
        <div className="container">
          <div className="navbar navbar-default navbar-fixed-top"  role="navigation" >
            <div className="navbar-header">
              <button  type="button" className="navbar-toggle"  data-toggle="collapse"  data-target=".navbar-collapse" >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="menu-navigation navbar-collapse collapse ">
              <ul className="menu-navigation__list nav navbar-nav " >
                <li className="current">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/fleets">
                    Fleet <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/fleet-second">Fleet page 2</Link>
                    </li>
                    <li>
                      <Link to="/fleets">
                        Cars{" "}
                        <i className="icon-arrow-down-sign-to-navigate"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/">
                            Executive Sedans{" "}
                            <i className="icon-arrow-down-sign-to-navigate"></i>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/">Sub Item 1</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 2</Link>
                            </li>
                            <li className="disabled">
                              <Link className="disabled" to="/">
                                Disabled item
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 3</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 4</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 5</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 6</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/fleets">Luxury Sedans</Link>
                        </li>
                        <li>
                          <Link to="/fleets">Limousine</Link>
                        </li>
                        <li>
                          <Link to="/fleets">Sport Car</Link>
                        </li>
                        <li>
                          <Link to="/fleets">SUV</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/fleets">Mini bus</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Motobikes</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Yachts</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Airplane</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Helicopter</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/services">
                    Services{" "}
                    <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/services-post">24 Hour Airport Services</Link>
                    </li>
                    <li>
                      <Link to="/services">Business Travel</Link>
                    </li>
                    <li>
                      <Link to="/services">Corporate</Link>
                    </li>
                    <li>
                      <Link to="/services">Meetings &#38; Events</Link>
                    </li>
                    <li>
                      <Link to="/services">Private Tours</Link>
                    </li>
                    <li>
                      <Link to="/services">To My Door</Link>
                    </li>
                    <li>
                      <Link to="/services">Chauffeur Service</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/rates">Rates</Link>
                </li>
                <li>
                  <Link to="/drivers">Our drivers</Link>
                </li>
                <li>
                  <Link to="/blog">
                    Blog <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/blog">Blog list</Link>
                    </li>
                    <li>
                      <Link to="/blog-mansonry">Masonry layout</Link>
                    </li>
                    <li>
                      <Link to="/single-post">Single Post</Link>
                    </li>
                    <li>
                      <Link to="typography.html">Typography</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contactus">Contacts</Link>
                </li>
                <li>
                  <Link to="/register">Register/Login</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-list">
            <span className="social-list__text">Find us here:</span>
            <ul className="social-list__icons">
              <li>
                <Link
                  target="/"
                  to="https://www.facebook.com/Tonytemplates/?ref=hl"
                >
                  <i className="icon-facebook-logo"></i>
                </Link>
              </li>
              <li>
                <Link target="/" to="https://twitter.com/tonytemplates/">
                  <i className="icon-twitter-letter-logo"></i>
                </Link>
              </li>
              <li>
                <Link target="/" to="https://plus.google.com/">
                  <i className="icon-google-plus"></i>
                </Link>
              </li>
              <li>
                <Link target="/" to="https://www.linkedin.com/uas/login?">
                  <i className="icon-linkedin-logo"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-container_wrap container">
        <div className="header-container__flex">
          <div className="logo">
            <Link to="/">
              <i className="icon-logo"></i>
              <span>Rental</span>Cars
            </Link>
          </div>
          <div className="social-list">
            <span className="social-list__text">Find us here:</span>
            <ul className="social-list__icons">
              <li>
                <Link
                  target="/"
                  to="https://www.facebook.com/Tonytemplates/?ref=hl"
                >
                  <i className="icon-facebook-logo"></i>
                </Link>
              </li>
              <li>
                <Link target="/" to="https://twitter.com/tonytemplates/">
                  <i className="icon-twitter-letter-logo"></i>
                </Link>
              </li>
              <li>
                <Link target="/" to="https://plus.google.com/">
                  <i className="icon-google-plus"></i>
                </Link>
              </li>
              <li>
                <Link target="/" to="https://www.linkedin.com/uas/login?">
                  <i className="icon-linkedin-logo"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="phone_block">
            <span>
              <i className="icon-telephone"></i> 1-800-123-4567
            </span>
            <small>Our Reservation Specialists 24/7</small>
          </div>
        </div>
      </div>
      <div className="header-navigation-wrap stickUp">
        <div
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="menu-navigation navbar-collapse collapse">
              <ul className="menu-navigation__list nav navbar-nav">
                <li className="current">
                  <Link to="/" data-hover="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" data-hover="About us">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/fleets" data-hover="Fleet">
                    Fleet <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/fleet-second">Fleet page 2</Link>
                    </li>
                    <li>
                      <Link to="/fleets">
                        Cars{" "}
                        <i className="icon-arrow-down-sign-to-navigate"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/">
                            Executive Sedans{" "}
                            <i className="icon-arrow-down-sign-to-navigate"></i>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/">Sub Item 1</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 2</Link>
                            </li>
                            <li className="disabled">
                              <Link className="disabled" to="/">
                                Disabled item
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 3</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 4</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 5</Link>
                            </li>
                            <li>
                              <Link to="/">Sub Item 6</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/fleets">Luxury Sedans</Link>
                        </li>
                        <li>
                          <Link to="/fleets">Limousine</Link>
                        </li>
                        <li>
                          <Link to="/fleets">Sport Car</Link>
                        </li>
                        <li>
                          <Link to="/fleets">SUV</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/fleets">Mini bus</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Motobikes</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Yachts</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Airplane</Link>
                    </li>
                    <li>
                      <Link to="/fleets">Helicopter</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/services" data-hover="Services">
                    Services &nbsp;{" "}
                    <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/services-post">24 Hour Airport Services</Link>
                    </li>
                    <li>
                      <Link to="/services">Business Travel</Link>
                    </li>
                    <li>
                      <Link to="/services">Corporate</Link>
                    </li>
                    <li>
                      <Link to="/services">Meetings &#38; Events</Link>
                    </li>
                    <li>
                      <Link to="/services">Private Tours</Link>
                    </li>
                    <li>
                      <Link to="/services">To My Door</Link>
                    </li>
                    <li>
                      <Link to="/services">Chauffeur Service</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/rates" data-hover="Rates">
                    Rates
                  </Link>
                </li>
                <li>
                  <Link to="/drivers" data-hover="Our drivers">
                    Our drivers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" data-hover="Blog">
                    Blog <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/blog">Blog list</Link>
                    </li>
                    <li>
                      <Link to="/blog-mansonry">Masonry layout</Link>
                    </li>
                    <li>
                      <Link to="/single-post">Single Post</Link>
                    </li>
                    <li>
                      <Link to="typography.html">Typography</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contactus" data-hover="Contacts">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/register" data-hover="Register/Login">
                    Register/Login&nbsp; &nbsp;
                    <i className="icon-arrow-down-sign-to-navigate"></i>
                  </Link>
                  <ul className="sub-menu dropdown-menu">
                    <li>
                      <Link to="/register">Signup</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
