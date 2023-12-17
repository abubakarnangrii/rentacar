import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';
import { CustomSlider } from '../components/Slider';

export default function Fleet() {
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
                              <div className="breadcrumbs__title">Fleet</div>
                              <div className="breadcrumbs__items">
                                  <div className="breadcrumbs__wrap">
                                      <div className="breadcrumbs__item">
                                          <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/fleets" className="breadcrumbs__item-link">Fleet</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <CustomSlider/>
              <section className="isotop-box">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12">
                              <h1>Our Fleet</h1>
                            
                              <div className="filters-by-category">
                                  <ul className="option-set" data-option-key="filter">
                                      <li><Link to="#filter" data-option-value="*" className="selected">All</Link></li>
                                      <li><Link to="#filter" data-option-value=".category1" className="">Executive Sedans</Link></li>
                                      <li><Link to="#filter" data-option-value=".category2" className="">Luxury Sedans</Link></li>
                                      <li><Link to="#filter" data-option-value=".category3" className="">Limousine</Link></li>
                                      <li><Link to="#filter" data-option-value=".category4" className="">Sport Car</Link></li>
                                      <li><Link to="#filter" data-option-value=".category5" className="">SUV</Link></li>
                                      <li><Link to="#filter" data-option-value=".category6" className="">Passenger Van</Link></li>
                                      <li><Link to="#filter" data-option-value=".category7" className="">Mini Bus</Link></li>
                                      <li><Link to="#filter" data-option-value=".category8" className="">Motobike</Link></li>
                                      <li><Link to="#filter" data-option-value=".category9" className="">Yacht</Link></li>
                                      <li><Link to="#filter" data-option-value=".category10" className="">Helicopter</Link></li>
                                      <li><Link to="#filter" data-option-value=".category11" className="">Airplane</Link></li>
                                  </ul>
                              </div>


                              <div className="gallery gallery-isotope" id="gallery">
                                  <div className="gallery__item  category6 category7">
                                      <figure className="gallery__item__image">
                                          <Link className="hover" to="/details">
                                              <img src="assets/images/gallery/gallery-img-thumb-01.jpg" alt="" />
                                              <i className="icon-arrow-down-sign-to-navigate2"></i>
                                          </Link>
                                      </figure>
                                      <div className="gallery__item__content">
                                          <h6>Mercedes-Benz Van</h6>
                                          <span className="cost"><span><strong>20$</strong> / hour</span><span><strong>100$</strong> / day</span></span>
                                          <u><Link to="/details" className="link-gallery">View Details</Link></u>
                                          <span className="btn btn-mini" data-remodal-target="modal">Book now</span>
                                      </div>
                                  </div>
                                  <div className="gallery__item category1 category2 category4">
                                      <figure className="gallery__item__image">
                                          <Link className="hover" to="/details">
                                              <img src="assets/images/gallery/gallery-img-thumb-02.jpg" alt="" />
                                              <i className="icon-arrow-down-sign-to-navigate2"></i>
                                          </Link>
                                      </figure>
                                      <div className="gallery__item__content">
                                          <h6>Porsche 911 Carrera</h6>
                                          <span className="cost"><span><strong>50$</strong> / hour</span><span><strong>230$</strong> / day</span></span>
                                          <u><Link to="/details" className="link-gallery">View Details</Link></u>
                                          <span className="btn btn-mini" data-remodal-target="modal">Book now</span>
                                      </div>
                                  </div>
                                  <div className="gallery__item category1 category4  category5">
                                      <figure className="gallery__item__image">
                                          <Link className="hover" to="/details">
                                              <img src="assets/images/gallery/gallery-img-thumb-03.jpg" alt="" />
                                              <i className="icon-arrow-down-sign-to-navigate2"></i>
                                          </Link>
                                      </figure>
                                      <div className="gallery__item__content">
                                          <h6>Hyundai Santa Fe</h6>
                                          <span className="cost"><span><strong>18$</strong> / hour</span><span><strong>90$</strong> / day</span></span>
                                          <u><Link to="/details" className="link-gallery">View Details</Link></u>
                                          <span className="btn btn-mini" data-remodal-target="modal">Book now</span>
                                      </div>

                                  </div>
                                  <div className="gallery__item category2 category4">
                                      <figure className="gallery__item__image">
                                          <Link className="hover" to="/details">
                                              <img src="assets/images/gallery/gallery-img-thumb-04.jpg" alt="" />
                                              <i className="icon-arrow-down-sign-to-navigate2"></i>
                                          </Link>
                                      </figure>
                                      <div className="gallery__item__content">
                                          <h6>Jaguar F-Type S</h6>
                                          <span className="cost"><span><strong>34$</strong> / hour</span><span><strong>159$</strong> / day</span></span>
                                          <u><Link to="/details" className="link-gallery">View Details</Link></u>
                                          <span className="btn btn-mini" data-remodal-target="modal">Book now</span>
                                      </div>
                                  </div>
                                  <div className="gallery__item category2 category5">
                                      <figure className="gallery__item__image">
                                          <Link className="hover" to="/details">
                                              <img src="assets/images/gallery/gallery-img-thumb-05.jpg" alt="" />
                                              <i className="icon-arrow-down-sign-to-navigate2"></i>
                                          </Link>
                                      </figure>
                                      <div className="gallery__item__content">
                                          <h6>Hyundai i30</h6>
                                          <span className="cost"><span><strong>22$</strong> / hour</span><span><strong>115$</strong> / day</span></span>
                                          <u><Link to="/details" className="link-gallery">View Details</Link></u>
                                          <span className="btn btn-mini" data-remodal-target="modal">Book now</span>
                                      </div>
                                  </div>
                                  <div className="gallery__item category6 category5">
                                      <figure className="gallery__item__image">
                                          <Link className="hover" to="/details">
                                              <img src="assets/images/gallery/gallery-img-thumb-06.jpg" alt="" />
                                              <i className="icon-arrow-down-sign-to-navigate2"></i>
                                          </Link>
                                      </figure>
                                      <div className="gallery__item__content">
                                          <h6>Ford Edge</h6>
                                          <span className="cost"><span><strong>21$</strong> / hour</span><span><strong>110$</strong> / day</span></span>
                                          <u><Link to="/details" className="link-gallery">View Details</Link></u>
                                          <span className="btn btn-mini" data-remodal-target="modal">Book now</span>
                                      </div>
                                  </div>
                              </div>

                              <div className="pagination">
                                  <ul>
                                      <li className="active"><Link to="#">1</Link></li>
                                      <li><Link to="#">2</Link></li>
                                      <li><Link to="#">3</Link></li>
                                      <li><Link to="#">4</Link></li>
                                  </ul>
                              </div>
                          </div>
                      </div> 
                  </div> 
              </section>

              <section className="car-info-box img-left">
                  <div className="car-info-box__description">
                      <div className="desc-inner">
                          <h1>Luxury Cars</h1>
                          <span className="text-link">No booking fees! No markups!</span>
                          <p>Search through Rental Cars renowned luxury car rental brands, rent to self-drive in the USA. Delivery at your location across Car Rentals, and Sharjah Car Rentals now available. Through OneClickDrive, you can also hire a BMW, Audi, Jaguar, Range Rover, Lexus or Mercedes with a professional driver chauffeur service. </p>
                      </div>
                  </div>
                  <figure className="car-info-box__thumb has-second-img">
                      <img src="assets/images/car_hire1.jpg" alt="" className="first-fade"/>
                          <img src="assets/images/car_hire2.jpg" alt="" className="second-fade"/>
                          </figure>
                      </section>
                      <section className="iphone-parallax_box">
                          <div className="container">
                              <div className="row">
                                  <div className="col-sm-12">
                                      <div className="iphone-android_info-box">
                                          <h1><span>Free iPhone &amp;</span> <span>Android App</span></h1>
                                          <p><span>Renal Cars App is a car rental marketplace where travelers can rent any car they want,</span> <span>wherever they want it, from a community of local car owners throughout the US and Canada.</span></p>
                                          <span><Link target="_blank" to="https://itunes.apple.com/"><img src="assets/images/app_store.jpg" alt=""/></Link>
                                              <Link target="_blank" to="https://play.google.com/store"><img src="assets/images/google_play.jpg" alt=""/></Link></span>
                                          <div className="secondeffect">
                                              <div className="first-text-block">
                                                  <span>Our Fleet <em>Great Rental Car Selection.</em></span>
                                              </div>
                                              <div className="second-text-block">
                                                  <i className="icon-logo"></i>
                                                  <span className="title_block"><span>Rental</span>Cars</span>
                                                  <em><i className="icon-telephone"></i> 1-800-123-4567</em>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </section>


                  </main>
                 

    <Footer/>
    </div>
  )
}
