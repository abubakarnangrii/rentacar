import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Contactus() {
  return (
    <div>
    <Header/>
          <Loader />
          <Color />
          <main id="page-content">
              <div className="breadcrumbs">
                  <div className="container">
                      <div className="row">
                          <div className="col-xs-12">
                              <div className="breadcrumbs__title">Contacts</div>
                              <div className="breadcrumbs__items">
                                  <div className="breadcrumbs__wrap">
                                      <div className="breadcrumbs__item">
                                          <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/contactus" className="breadcrumbs__item-link">Contacts</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           
              <section className="contact-map">
                  <div id="contacts-map"></div>
                  <div className="contact-info-block">
                      <div className="logo-contacts">
                          <div className="logo">
                              <Link to="index-2.html">
                                  <i className="icon-logo"></i>
                                  <span>Rental</span>Cars
                              </Link>
                          </div>
                      </div>
                      <div className="contact-info">
                          <span className="phone_number"><i className="icon-telephone"></i> 1-800-123-4567</span>
                          <span className="location_info">
                              <i className="icon-placeholder-for-map"></i>
                              <em>The Company Name Inc.</em>
                              <em>9870 St Vincent Place,</em>
                              <em>Glasgow, DC 45 Fr 45.</em> </span>
                      </div>
                      <div className="social-list">
                          <ul className="social-list__icons">
                              <li><Link target="_blank" to="https://www.facebook.com/Tonytemplates/?ref=hl"><i className="icon-facebook-logo"></i></Link></li>
                              <li><Link target="_blank" to="https://twitter.com/tonytemplates/"><i className="icon-twitter-letter-logo"></i></Link></li>
                              <li><Link target="_blank" to="https://plus.google.com/"><i className="icon-google-plus"></i></Link></li>
                              <li><Link target="_blank" to="https://www.linkedin.com/uas/login?"><i className="icon-linkedin-logo"></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </section>
              <div className="container">
                  <div className="row">
                      <div className="col-xs-12">
                          <div className="wrap-form">
                              <h1>Leave a Message</h1>
                              <form id="contactform" className="contact-form comment-form" name="contactform" method="post" novalidate>
                                  <div id="success">
                                      <p>Your message was sent successfully!</p>
                                  </div>
                                  <div id="error">
                                      <p>Something went wrong, try refreshing and submitting the form again.</p>
                                  </div>
                                  <div className="input-wrapper first-child">
                                      <input type="text" className="input-custom input-full" name="name" placeholder="Your name"/>
                                  </div>
                                  <div className="input-wrapper last-child">
                                      <input type="text" className="input-custom input-full" name="email" placeholder="E-mail"/>
                                  </div>
                                  <div className="textarea-wrapper">
                                      <textarea className="textarea-custom input-full" name="Comment" placeholder="Comment"></textarea>
                                  </div>
                                  <div className="btn-wrapper">
                                      <button type="submit" id="submit" className="btn btn-form">Send message</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
    <Footer/>
    </div>
  )
}
