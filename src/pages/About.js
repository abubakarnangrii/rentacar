import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function About() {
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
                              <div className="breadcrumbs__title">About Us</div>
                              <div className="breadcrumbs__items">
                                  <div className="breadcrumbs__wrap">
                                      <div className="breadcrumbs__item">
                                          <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/about" className="breadcrumbs__item-link">About Us</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="text-block">
                              <h1>Company Overview</h1>
                              <span className="text-link">Rental Cars is one of the leading  car rental companies in USA</span>
                              <p>Rent a car in USA and benefit from low prices, professional service and a great range of comfortable new vehicles. And with our car rental stations in USA and across the world located exactly where you need them most – in city centers, airports and railway stations – you'll be hitting the road in no time, whether travelling for business or pleasure. Rent a car in USA with Rental Cars today and find the perfect rental car or truck for your needs, while enjoying the added peace of mind that comes with a name you can trust. Rent a car with us It's easy to book your car rental in USA with Rental Cars. Just use our simple three-step booking process to find your ideal rental in no time. </p>
                              <p>We aim to keep things quick and easy for our customers while offering great every-day low prices car rental. That's why we were voted the "World’s Leading Leisure Car hire Company". So whether you're looking for a family rental, an eco-friendly vehicle or a van hire, pay us a visit at rental station and enjoy fast and friendly service. The Green Program Here at Renal Cars, we believe what’s good for the Earth is good for our drivers. That's why we work hard to understand the environmental impact of what we do. From this, we have wholeheartedly embraced a sustainable development program and are proud to be the first car rental company in USA with certified ecological commitments.</p>
                              <ul className="list__marker">
                                  <li><Link to="#">Best price guarantee</Link></li>
                                  <li><Link to="#">No cancellation or amendment fees</Link></li>
                                  <li><Link to="#">No hidden extras to pay - theft and damage cover included</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="car-info-box">
                  <div className="car-info-box__description">
                      <div className="desc-inner">
                          <h1>Car Hire</h1>
                          <span className="text-link">Search for the best deals on rental cars</span>
                          <p>Find cheap car hire fast and hit the road happy with Rental Cars. Search the world’s top car hire companies. Instantly compare prices. Then book direct with the car rental company of your choice. It’s so easy.  We search thousands of destinations and compare thousands of car hire deals to help you find your perfect drive at a low price. </p>
                      </div>
                  </div>
                  <figure className="car-info-box__thumb has-second-img">
                      <img src="assets/images/car_hire.jpg" alt="" className="first-fade" />
                      <img src="assets/images/car_hire2.jpg" alt="" className="second-fade" />
                  </figure>
              </div>
              <div className="image_box">
                  <div className="image_box__inner">
                      <div className="container">
                          <div className="row">
                              <div className="col-sm-12">
                                  <h1>Flexible Service</h1>
                                  <div className="image_box__description">
                                      <figure className="thumbnail"><img src="assets/images/service_img.jpg" alt="" /></figure>
                                      <span className="text-link">Rent a car in USA with one of the best car rental companies</span>
                                      <p>Whether you're looking for a short-term rental to tour USA or a month-long rent-a-car solution, you can find every type of rental car here on Rental Cars. Our portal is built to deliver straight-forward service to minimize the time you'd otherwise take to find the perfect rental car for you, ensuring comfort, affordability and safety. </p>
                                      <p>Points of interests in the USA are innumerable and spread across the emirates. Visit your selected locations with ease and at your pace with a cheap rental car in USA. From renowned shopping destinations to the exquisite lifestyle offerings, USA has it all and the best way to get around is by a car. </p>
                                      <p>There's definitely no reason to beg, and borrow or steal a car when renting a car in the USA. Whether you're looking for a short-term rental to tour USA or a month-long rent-a-car solution, you can find every type of rental car here on Rental Cars. </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="info-box_with-background">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12 heading___">
                              <h1>Why Choose Us</h1>
                              <span className="text-link">Committed to give customer a delightful renting experience</span>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-lg-6">
                              <div className="block-icon heading___">
                                  <i className="icon-check-mark"></i>
                                  <span>Express pick-up service available</span>
                                  <p>Visit your selected locations with ease and at your pace with a cheap rental car in USA. </p>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-lg-6">
                              <div className="block-icon heading___">
                                  <i className="icon-check-mark"></i>
                                  <span>Short and long term car rental</span>
                                  <p>Whether you're looking for a short-term rental to tour USA or a month-long rent-a-car solution. </p>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-lg-6">
                              <div className="block-icon heading___">
                                  <i className="icon-check-mark"></i>
                                  <span>New, comfortable rental car fleet</span>
                                  <p>Visit your selected locations with ease and at your pace with a cheap rental car in USA. </p>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-lg-6">
                              <div className="block-icon heading___">
                                  <i className="icon-check-mark"></i>
                                  <span>Award winning car rental company</span>
                                  <p>There's definitely no reason to beg, and borrow or steal a car when renting a car in the USA. </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row info-box">
                      <div className="col-xs-12">
                          <article>
                              <h1>Start your travel planning here</h1>
                              <span className="text-link">Drive away with more money in your pockets and more time on your itinerary.</span>
                              <Link to="/fleets" className="btn">BOOK NOW</Link>
                              <Link to="/contactus" className="btn invert">EMAIL US</Link>
                          </article>
                      </div>
                  </div>
              </div>

              
          </main>
          <Footer/>
      </div>
  )
}
