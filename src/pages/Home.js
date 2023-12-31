import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';
import Carousel from '../components/Carousel';
import { CustomSlider } from '../components/Slider';


export default function Home() {

	return (
		<div>
			<Header />
			<Loader />
			<Color />
			<main id="page-content">
			<Carousel/>
				<div className="book-form-box">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<form id="book-form" className="book-form" action="#">
									<span className="book-form__title">
										Book Now
										<small>Best Price Online</small>
									</span>
									<div className="book-form__block-select">
										<div className="inner-block">
											<div className="book-form__text">Pick up Location</div>
											<select name="location" id="selectPrevLocation">
												<option disabled>Location</option>
												<option value="Washington">Washington</option>
												<option selected value="New York">New York</option>
												<option value="Boston">Boston</option>
												<option value="Florida">Florida</option>
											</select>
										</div>
										<div className="inner-block second-block">
											<div className="book-form__text">Pick up Date/Time</div>
											<select name="datetime" id="selectPrevMonth">
												<option selected value="1">Jan</option>
												<option value="2">Feb</option>
												<option value="3">Mar</option>
												<option value="4">Apr</option>
												<option value="5">May</option>
												<option value="6">Jun</option>
												<option value="7">Jul</option>
												<option value="8">Aug</option>
												<option value="9">Sept</option>
												<option value="10">Oct</option>
												<option value="11">Nov</option>
												<option value="12">Dec</option>
											</select>
											<select name="day" id="selectPrevDay">
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
												<option value="13">13</option>
												<option value="14">14</option>
												<option value="15">15</option>
												<option value="16">16</option>
												<option value="17">17</option>
												<option value="18">18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25">25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
											</select>
											<select name="time" id="selectPrevTime">
												<option value="08:00 AM">08:00 AM</option>
												<option value="09:00 AM">09:00 AM</option>
												<option value="10:00 AM">10:00 AM</option>
												<option value="11:00 AM">08:00 AM</option>
												<option value="12:00 PM">12:00 PM</option>
												<option value="13:00 PM">13:00 PM</option>
												<option value="14:00 PM">14:00 PM</option>
												<option value="15:00 PM">15:00 PM</option>
											</select>
										</div>
									</div>
									<div className="book-form__btn">
										<input type="submit" className="btn" id="setDateBtn" data-remodal-target="modal" value="BOOK NOW" />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="parallax_box">
					<figure className=" move_img " data-wow-delay="0.5s"></figure>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-lg-6 col-lg-push-6">
								<h1>Welcome</h1>
								<p>Hiring a car just got easier with the reliable service of Car Rental Service! Having covered all the 50 states in America, we offer the finest choice of vehicles ranging from economy to luxury.</p>
								<p>We have tied up with renowned car rental brands so that we can provide our customers with the most economic car rental deals along with world className customer service. </p>
								<ul className="list__marker">
									<li>Best price guarantee</li>
									<li>No cancellation or amendment fees</li>
									<li>No hidden extras to pay - theft and damage cover included</li>
								</ul>
								<Link to="/services" className="btn">Read more</Link>
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


				<div className="container">
					<div className="row info-box">
						<div className="col-xs-12">
							<article className="fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
								<h1>Start your travel planning here</h1>
								<span className="text-link">Drive away with more money in your pockets and more time on your itinerary.</span>
								<Link to="/" className="btn" data-remodal-target="modal">BOOK NOW</Link>
								<Link to="/contactus" className="btn invert">EMAIL US</Link>
							</article>
						</div>
					</div>
				</div>
				<CustomSlider/>
				<section class="service-info-box">
					<h1>Featured Services</h1>
					<span class="text-link">More than just a car rental company</span>
					<div class="swiper-container-column swiper-container-column-first swiper-container">
						<div class="swiper-wrapper_">
							<div class="swiper-slide odd-line1">
								<div class="service-block">
									
										<figure class="thumbnail">
											<Link to="/services-post"><img src="assets/images/service_img_1.jpg" alt=""/></Link>
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
										<Link to="/services-post"><img src="assets/images/service_img_2.jpg" alt=""/></Link>
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
										<Link to="/services-post"><img src="assets/images/service_img_3.jpg" alt=""/></Link>
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
										<Link to="/services-post"><img src="assets/images/service_img_4.jpg" alt=""/></Link>
									</figure>
									<div class="service-block__content_">
										<h3>Private Tours</h3>
										<p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades. Free maintenance. We offer amazing deals on car rental rates. Give us a call we make it easy and affordable.</p>
										<Link to="/services-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-pagination swiper-pagination-services-second"></div>
					<Link to="/services" class="btn">MORE SERVICES</Link>
				</section>

				<section className="testimonials-carousel_box">
					<div className="container">
						<h1>Clients Say</h1>
						<span className="text-link">What our clients say about us</span>
						<div className="swiper-container-blockquote swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide__">
									<article className="block_tesimonial">
										<blockquote>
											<div className="inner_blockquote">
												<div className="wrapper">
													<p>I was very pleased once again. Hiring online was easy, collection was straight forward, and returning the car was quick. A very good experience! Thank you.</p>
													<span className="author_info">
														<img src={require('../images/author_img.png')} alt="" />
														<span className="name"><Link to="/">Thomas Burgess</Link></span>
														<span className="position">Regular Customer</span>
													</span>
												</div>
											</div>
										</blockquote>
									</article>
								</div>
								<div className="swiper-slide__">
									<article className="block_tesimonial">
										<blockquote>
											<div className="inner_blockquote">
												<div className="wrapper">
													<p>This is the second time this year that I have rented a Rental Cars direct vehicle and the cars were both virtually brand new. Awesome cars and very kind, helpful staff. Thank you!</p>
													<span className="author_info">
														<img src={require('../images/author_img_1.png')} alt="" />
														<span className="name"><Link to="/">Donald Alford</Link></span>
														<span className="position">Regular Customer</span>
													</span>
												</div>
											</div>
										</blockquote>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="blog-posts-carousel">
					<div className="container">
						<h1>From the Blog</h1>
						<span className="text-link">Our latest news and events</span>
						<div className="swiper-container swiper-container-blog">
							<div className="swiper-wrapper">
								<div className="swiper__slide post-item">
									<div className="post-item__inner">
										<figure className="thumbnail">
											<img src={require('../images/item_img-1.jpg')} alt="" />
										</figure>
										<div className="post-item__content">
											<span className="date">10 February, 2017</span>
											<h4>Finding Cheap Rental Cars</h4>
											<Link to="/single-post" className="btn btn__marker"><i className="icon-arrows"></i></Link>
										</div>
									</div>
								</div>
								<div className="swiper__slide post-item">
									<div className="post-item__inner">
										<figure className="thumbnail">
											<img src={require('../images/item_img-2.jpg')} alt="" />
										</figure>
										<div className="post-item__content">
											<span className="date">11 February, 2017</span>
											<h4>19 ways to save money on rental cars</h4>
											<Link to="/single-post" className="btn btn__marker"><i className="icon-arrows"></i></Link>
										</div>
									</div>
								</div>
								<div className="swiper__slide post-item">
									<div className="post-item__inner">
										<figure className="thumbnail">
											<img src={require('../images/item_img-3.jpg')} alt="" />
										</figure>
										<div className="post-item__content">
											<span className="date">12 February, 2017</span>
											<h4>Finding Cheap Rental Cars</h4>
											<Link to="/single-post" className="btn btn__marker"><i className="icon-arrows"></i></Link>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-pagination swiper-pagination-blog"></div>
						</div>
					</div>
				</section>

				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="phone-box wow zoomIn">
								<h1>Join Us and Save on Car Rentals!</h1>
								<span className="text-link">Great offers for cheap car rental, daily, weekly long term rentals</span>
								<h3 className="phone-box__number">Call Now: <span><i className="icon-telephone"></i> 1-800-123-4567</span></h3>
							</div>
						</div>
					</div>
				</div>
				<section className="car-info-box" data-wow-duration="1s" data-wow-delay="1s">
					<div className="car-info-box__description">
						<div className="desc-inner">
							<h1>Car Hire</h1>
							<span className="text-link">Search for the best deals on rental cars</span>
							<p>Find cheap car hire fast and hit the road happy with Rental Cars. Search the world’s top car hire companies. Instantly compare prices. Then book direct with the car rental company of your choice. It’s so easy. We search thousands of destinations and compare thousands of car hire deals to help you find your perfect drive at a low price. </p>
						</div>
					</div>
					<figure className="car-info-box__thumb has-second-img">
						<img src={require('../images/car_hire.jpg')} alt="" className="first-fade" />
						<img src={require('../images/car_hire1.jpg')} alt="" className="second-fade" />
					</figure>
				</section>
				<section className="iphone-parallax_box">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="iphone-android_info-box">
									<h1><span>Free iPhone &amp;</span> <span>Android App</span></h1>
									<p><span>Renal Cars App is a car rental marketplace where travelers can rent any car they want,</span> <span>wherever they want it, from a community of local car owners throughout the US and Canada.</span></p>
									<span><Link target="_blank" rel="noreferrer" to="https://itunes.apple.com/"><img src={require('../images/app_store.jpg')} alt="" /></Link>
										<Link target="_blank" rel="noreferrer" to="https://play.google.com/store"><img src={require('../images/google_play.jpg')} alt="" /></Link></span>
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
			</main >

			<Footer />
		</div>
	)
}
