import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Drivers() {
    return (
        <div>
            <Header />
            <Loader />
            <Color />
            <main id="page-content">
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="breadcrumbs__title">Our Drivers</div>
                                <div className="breadcrumbs__items">
                                    <div className="breadcrumbs__wrap">
                                        <div className="breadcrumbs__item">
                                            <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/drivers" className="breadcrumbs__item-link">Our drivers</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="our-team-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-1.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Francis Thigpen</Link></h3>
                                        <span className="position">Limousine driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-2.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Justin Groh</Link></h3>
                                        <span className="position">Airport transfer driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-3.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Anthony Grant</Link></h3>
                                        <span className="position">Business travel driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-4.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Ronnie Key</Link></h3>
                                        <span className="position">Limousine driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-5.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Michael Holmes</Link></h3>
                                        <span className="position">Airport transfer driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-6.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Luis Jones</Link></h3>
                                        <span className="position">Business travel driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-7.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">James Spotts</Link></h3>
                                        <span className="position">Limousine driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-8.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Jose Glenn</Link></h3>
                                        <span className="position">Airport transfer driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <div className="block-team__item">
                                    <figure className="thumbnail">
                                        <img src="assets/images/team_thumb-9.jpg" alt="" />
                                    </figure>
                                    <div className="block-team__desc">
                                        <h3><Link to="#">Timmy Weller</Link></h3>
                                        <span className="position">Business travel driver</span>
                                        <p>Huge discounts. Free Delivery and Pickup. Free Car washes. Free upgrades.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12">
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
            </main>
            <Footer />
        </div>
    )
}
