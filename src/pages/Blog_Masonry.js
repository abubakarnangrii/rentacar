import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Blog_Masonry() {
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
                              <div class="breadcrumbs__title">Blog Posts</div>
                              <div class="breadcrumbs__items">
                                  <div class="breadcrumbs__wrap">
                                      <div class="breadcrumbs__item">
                                          <Link to="/" class="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/blog-masonry" class="breadcrumbs__item-link">Blog masonry layout</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             
              <div class="container">
                  <div class="post-list-masonry">
                      <div class="post-list-masonry__item">
                          <article class="post-list__item format-standart">
                              <figure class="thumbnail post-list__thumbnail">
                                  <Link to="/single-post"><img src="assets/images/blog-post-img-masonry-1.jpg" alt=""/></Link>
                              </figure>
                              <div class="post-list__item-content">
                                  <header class="post-list__item-header">
                                      <div class="post-list__item-meta post-block_meta">
                                          <span class="date">10 February, 2017</span>
                                      </div>
                                      <h3 class="post-list__item-title">RentalCars's Cheap One-Way Car Rental Guide</h3>
                                  </header>
                                  <div class="post-list__item-desc">
                                      <p>Leann Rimes bought a one-way ticket on a westbound train, to see how far she could go. Eventually, she might want to make a return trip back east!</p>
                                  </div>
                                  <footer class="post-list__item-footer">
                                      <Link to="/single-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </footer>
                              </div>
                          </article>
                      </div>
                      <div class="post-list-masonry__item">
                          <article class="post-list__item format-video">
                              <figure class="thumbnail post-list__thumbnail video-thumb">
                                  <iframe title='Video1' src="https://player.vimeo.com/video/103180506"></iframe>
                              </figure>
                              <div class="post-list__item-content">
                                  <header class="post-list__item-header">
                                      <div class="post-list__item-meta post-block_meta">
                                          <span class="date">10 February, 2017</span>
                                      </div>
                                      <h3 class="post-list__item-title">An unlikely endorsement of rental cars from the star of Airplane!</h3>
                                  </header>
                                  <div class="post-list__item-desc">
                                      <p>Leann Rimes bought a one-way ticket on a westbound train, to see how far she could go. Eventually, she might want to make a return trip back east!</p>
                                  </div>
                                  <footer class="post-list__item-footer">
                                      <Link to="/single-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </footer>
                              </div>
                          </article>
                      </div>
                      <div class="post-list-masonry__item">
                          <article class="post-list__item format-quote">
                              <div class="post-list__item-content">
                                  <header class="post-list__item-header">
                                      <div class="post-list__item-meta post-block_meta">
                                          <span class="date">10 February, 2017</span>
                                      </div>
                                      <h3 class="post-list__item-title">Premium Credit Cards That Offer Premium Car Rental Benefits</h3>
                                  </header>
                                  <div class="post-list__item-desc">
                                      <blockquote class="post-format-quote">
                                          <p>Debit cards are also viewed as undesirable by the rental car companies as a proxy for "non-creditworthy renter" (whether fair or unfair). Using debit cards frequently come with many restrictions, if the rental car company will even accept the debit card at all! Without multiple forms of identification, large security deposits, and a successful credit check (among other provisions), the car renter with a debit card will likely be taking...</p>
                                      </blockquote>
                                  </div>
                                  <footer class="post-list__item-footer">
                                      <Link to="/single-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </footer>
                              </div>
                          </article>
                      </div>
                      <div class="post-list-masonry__item">
                          <d class="post-list__item format-audio">
                              <figure class="thumbnail post-list__thumbnail audio-thumb">
                                  <iframe title='Video2' width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197377286&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                              </figure>
                              <div class="post-list__item-content">
                                  <header class="post-list__item-header">
                                      <div class="post-list__item-meta post-block_meta">
                                          <span class="date">10 February, 2017</span>
                                      </div>
                                      <h3 class="post-list__item-title">Can I Receive Disability Accommodations</h3>
                                  </header>
                                  <div class="post-list__item-desc">
                                      <p>Leann Rimes bought a one-way ticket on a westbound train, to see how far she could go. Eventually, she might want to make a return trip back east!</p>
                                  </div>
                                  <footer class="post-list__item-footer">
                                      <Link to="/single-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </footer>
                              </div>
                          </d>
                      </div>
                      <div class="post-list-masonry__item">
                          <div class="post-list__item format-link">
                              <div class="thumbnail post-list__thumbnail link-thumb">
                                  <Link to="/single-post"><img src="assets/images/blog-post-img-masonry-5.jpg" alt=""/></Link>
                                  <Link to="index-2.html" class="post-link">http://www.rentalcarslink.com</Link>
                              </div>
                              <div class="post-list__item-content">
                                  <header class="post-list__item-header">
                                      <div class="post-list__item-meta post-block_meta">
                                          <span class="date">10 February, 2017</span>
                                      </div>
                                      <h3 class="post-list__item-title">The Fee Detective and the Grace of Rental Car Companies</h3>
                                  </header>
                                  <div class="post-list__item-desc">
                                      <p>Leann Rimes bought a one-way ticket on a westbound train, to see how far she could go. Eventually, she might want to make a return trip back east!</p>
                                  </div>
                                  <footer class="post-list__item-footer">
                                      <Link to="/single-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </footer>
                              </div>
                          </div>
                      </div>
                      <div class="post-list-masonry__item">
                          <article class="post-list__item format-gallery">
                              <div class="swiper-container-slider-format swiper-container">
                                  <div class="swiper-wrapper">
                                      <figure class="thumbnail post-list__thumbnail swiper-slide">
                                          <img src="assets/images/blog-post-img-masonry-2.jpg" alt=""/>
                                      </figure>
                                      <figure class="thumbnail post-list__thumbnail swiper-slide">
                                          <img src="assets/images/blog-post-img-masonry-3.jpg" alt=""/>
                                      </figure>
                                      <figure class="thumbnail post-list__thumbnail swiper-slide">
                                          <img src="assets/images/blog-post-img-masonry-4.jpg" alt=""/>
                                      </figure>
                                  </div>
                                  <div class="swiper-pagination swiper-pagination-slider-format"></div>
                                  <span class="swiper-button-next-blog swiper-button-next"><i class="icon-left-arrow2"></i></span>
                                  <span class="swiper-button-prev-blog swiper-button-prev"><i class="icon-left-arrow"></i></span>
                              </div>
                              <div class="post-list__item-content">
                                  <header class="post-list__item-header">
                                      <div class="post-list__item-meta post-block_meta">
                                          <span class="date">10 February, 2017</span>
                                      </div>
                                      <h3 class="post-list__item-title">For Whom the Road Tolls</h3>
                                  </header>
                                  <div class="post-list__item-desc">
                                      <p>Leann Rimes bought a one-way ticket on a westbound train, to see how far she could go. Eventually, she might want to make a return trip back east! </p>
                                  </div>
                                  <footer class="post-list__item-footer">
                                      <Link to="/single-post" class="btn btn__marker"><i class="icon-arrows"></i></Link>
                                  </footer>
                              </div>
                          </article>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-xs-12 center-text">
                          <Link to="/blog" class="btn">MORE POSTS</Link>
                      </div>
                  </div>
              </div>
          </main>
          
    <Footer/>
    </div>
  )
}
