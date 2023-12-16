import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="site-footer__top-panel">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="top-panel__info">
                <i className="icon-Cancellation"></i>
                <strong>Free cancellation</strong>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="top-panel__info">
                <i className="icon-commerce"></i>
                <strong>No credit card fees</strong>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="top-panel__info">
                <i className="icon-phone"></i>
                <strong>24/7 Call Center</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-elements">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-3">
              <figure className="footer_logo">
                <Link to="/">
                  <span>
                    <em>Celebrating</em>25<strong>YEARS</strong>
                  </span>
                  <i className="icon-111"></i>
                </Link>
              </figure>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <h5>Company</h5>
              <ul className="footer-list">
                <li>
                  <Link to="about.html">About us</Link>
                </li>
                <li>
                  <Link to="blog-masonry.html">News</Link>
                </li>
                <li>
                  <Link to="/">Emergency Contacts</Link>
                </li>
                <li>
                  <Link to="contacts.html">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <h5>Customer Services</h5>
              <ul className="footer-list">
                <li>
                  <Link to="blog.html">Blog</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Help renting a car</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="contact-info">
                <span className="phone_number">
                  <i className="icon-telephone"></i> 1-800-123-4567
                </span>

                <span className="location_info">
                  <i className="icon-placeholder-for-map"></i>
                  <em>The Company Name Inc.</em>
                  <em>9870 St Vincent Place,</em>
                  <em>Glasgow, DC 45 Fr 45.</em>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-footer__bottom-panel">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="copyright">
                &copy; 2017 | <Link to="/">Privacy Policy</Link> |{" "}
                <Link to="/">Rental policy</Link>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="social-list">
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
        </div>
      </section>

      <Link to="/" className="scrollup">
        <i className="icon-arrow-down-sign-to-navigate"></i>
      </Link>
    </footer>
  );
}
