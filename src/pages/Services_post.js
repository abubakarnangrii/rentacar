import React from 'react'
import {Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Services_post() {
  return (
    <div>
      <Header/>
          <Loader />
          <Color />
          <main id="page-content">
              <div class="breadcrumbs">
                  <div class="container">
                      <div class="row">
                          <div class="col-xs-12">
                              <div class="breadcrumbs__title">Services</div>
                              <div class="breadcrumbs__items">
                                  <div class="breadcrumbs__wrap">
                                      <div class="breadcrumbs__item">
                                          <Link to="/" class="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/services" class="breadcrumbs__item-link">About Us</Link> <span>/</span> <Link to="/services-post" class="breadcrumbs__item-link"> 24 Hour Airport  Services</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
              <div class="container">
                  <div class="row">
                      <div class="col-xs-12">
                          <article class="services-post">
                              <figure class="thumbnail"><img src="assets/images/services-post-img.jpg" alt=""/></figure>
                              <div class="services-post__desc">
                                  <h2>24 Hour Airport Services</h2>
                                  <p>Rental Cars offers worldwide airport transportation, making its airport car services available at hundreds of airport pick-up locations, anytime. Trying to find a taxi at an airport can be hectic any time of day. Instead of worrying about finding and waiting in the right line just to get into a cab of questionable quality and reliability, reserve an luxury sedan or stretch limousine that will be waiting to pick you up when you arrive.</p>
                                  <p>Airport car services are always on time and reliable, and they are available 24/7. Rental Cars services include limousine airport transportation as well as luxury car service in Los Angeles, Hong Kong, Chicago, and many other destinations. </p>
                                  <Link to="/contactus" class="btn">ORDER SERVICE NOW</Link>
                              </div>
                          </article>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-4">
                          <figure class="thumbnail banner-thumb">
                              <Link to="#"><img src="assets/images/banner-1.jpg" alt=""/></Link>
                          </figure>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-4">
                          <figure class="thumbnail banner-thumb">
                              <Link to="#"><img src="assets/images/banner-2.jpg" alt=""/></Link>
                          </figure>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-4">
                          <figure class="thumbnail banner-thumb">
                              <Link to="#"><img src="assets/images/banner-3.jpg" alt=""/></Link>
                          </figure>
                      </div>
                  </div>
              </div>
          </main>
      <Footer/>
    </div>
  )
}
