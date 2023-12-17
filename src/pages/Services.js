import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Services() {
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
                              <div className="breadcrumbs__title">Our Services</div>
                              <div className="breadcrumbs__items">
                                  <div className="breadcrumbs__wrap">
                                      <div className="breadcrumbs__item">
                                          <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/services" className="breadcrumbs__item-link">Services</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


              <section class="service-info-box">
                  <h1>Featured Services</h1>
                  <span class="text-link">More than just a car rental company</span>
                  <div class="swiper-container-column swiper-container-column-first swiper-container">
                      <div class="swiper-wrapper_">
                          <div class="swiper-slide odd-line1">
                              <div class="service-block">

                                  <figure class="thumbnail">
                                      <Link to="/services-post"><img src="assets/images/service_img_1.jpg" alt="" /></Link>
                                  </figure>

                                  <div class="service-block__content_">
                                      <h3>24 Hour Airport Services</h3>
                                      <p>The best and biggest airport transfer company in the city, Airport Transfers is here to provide you with the best one-stop transportation service with minimal fuss and maximum comfort.</p>
                                      <Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide even-line1">
                              <div class="service-block">
                                  <figure class="thumbnail">
                                      <Link to="/services-post"><img src="assets/images/service_img_2.jpg" alt="" /></Link>
                                  </figure>
                                  <div class="service-block__content_">
                                      <h3>Corporate Meetings &amp; Events</h3>
                                      <p>Does your company have employees or clients who frequently rent in the Los Angeles area? Setting up a corporate account allowsus to pre-deliver vehicles to hotels, offices, residences.</p>
                                      <Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide odd-line2">
                              <div class="service-block">
                                  <figure class="thumbnail">
                                      <Link to="/services-post"><img src="assets/images/service_img_3.jpg" alt="" /></Link>
                                  </figure>
                                  <div class="service-block__content_">
                                      <h3>Business Travel</h3>
                                      <p>We offer professional drivers who can chauffeur you to any destination you choose. Or ask for a type of tour or drive you are in the mood for and let us do the rest. </p>
                                      <Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide even-line2">
                              <div class="service-block">
                                  <figure class="thumbnail">
                                      <Link to="/services-post"><img src="assets/images/service_img_4.jpg" alt="" /></Link>
                                  </figure>
                                  <div class="service-block__content_">
                                      <h3>Private Tours</h3>
                                      <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades. Free maintenance. We offer amazing deals on car rental rates. Give us a call we make it easy and affordable.</p>
                                      <Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide even-line1">
                              <div class="service-block">
                                  <figure class="thumbnail">
                                      <Link to="/services-post"><img src="assets/images/service_img_2.jpg" alt="" /></Link>
                                  </figure>
                                  <div class="service-block__content_">
                                      <h3>Corporate Meetings &amp; Events</h3>
                                      <p>Does your company have employees or clients who frequently rent in the Los Angeles area? Setting up a corporate account allowsus to pre-deliver vehicles to hotels, offices, residences.</p>
                                      <Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide odd-line1">
                              <div class="service-block">

                                  <figure class="thumbnail">
                                      <Link to="/services-post"><img src="assets/images/service_img_1.jpg" alt="" /></Link>
                                  </figure>

                                  <div class="service-block__content_">
                                      <h3>24 Hour Airport Services</h3>
                                      <p>The best and biggest airport transfer company in the city, Airport Transfers is here to provide you with the best one-stop transportation service with minimal fuss and maximum comfort.</p>
                                      <Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  <div class="swiper-pagination swiper-pagination-services-second"></div>
                  <Link to="/services" class="btn">MORE SERVICES</Link>
              </section>


              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="phone-box">
                              <h1>Join Us and Save on Car Rentals!</h1>
                              <span className="text-link">Great offers for cheap car rental, daily, weekly long term rentals</span>
                              <h3 className="phone-box__number">Call Now: <span><i className="icon-telephone"></i> 1-800-123-4567</span></h3>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="services-box">
                  <div className="container">
                      <div className="box-list-posts swiper-container-services swiper-container">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide_">
                                  <div className="post-column">
                                      <figure className="thumbnail"><img src={"/assets/images/post-sm-img-1.jpg"} alt="" /></figure>
                                      <div className="post-column__content">
                                          <h3>Nearest<br></br> Airport Deals</h3>
                                          <span className="text-link">Budget Prices for Long <br></br>Term Rentals</span>
                                          <Link to="/services" className="btn btn__marker"><i className="icon-arrows"></i></Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide_">
                                  <div className="post-column">
                                      <figure className="thumbnail"><img src="/assets/images/post-sm-img-2.jpg" alt="" /></figure>
                                      <div className="post-column__content">
                                          <h3>Online Reservations</h3>
                                          <span className="text-link">Search Prices and <br></br>Special Offers</span>
                                          <Link to="/services" className="btn btn__marker"><i className="icon-arrows"></i></Link>
                                      </div>

                                  </div>
                              </div>
                              <div className="swiper-slide_">
                                  <div className="post-column">
                                      <figure className="thumbnail"><img src="/assets/images/post-sm-img-3.jpg" alt="" /></figure>
                                      <div className="post-column__content">
                                          <h3>24/7 Road Assistance</h3>
                                          <span className="text-link">Road Assistance &amp; Car Replacement</span>
                                          <Link to="/services" className="btn btn__marker"><i className="icon-arrows"></i></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="swiper-pagination swiper-pagination-services"></div>
                      </div>

                  </div>
              </div>

          </main>
          <Footer/>
      </div>
  )
}
