import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import Color from '../components/Color';

export default function Rates() {
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
                              <div className="breadcrumbs__title">Rates</div>
                              <div className="breadcrumbs__items">
                                  <div className="breadcrumbs__wrap">
                                      <div className="breadcrumbs__item">
                                          <Link to="/" className="breadcrumbs__item-link">Home</Link> <span>/</span> <Link to="/rates" className="breadcrumbs__item-link">Rates</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
              <div className="container">
                  <div className="row">
                      <div className="col-xs-12">
                          <div className="price-box">
                              <p>There are no hidden costs. No additional taxes or other fees will be added to our rental rates. The price quoted is exactly what you pay!
                                  Please note that all of our vehicles carry a damage/security deposit starting from TT$1,500 (cost varies depending on vehicle type). This deposit will be fully refunded when the vehicle is returned to us in good condition.</p>
                              <table className="price-table">
                                  <tbody>
                                      <tr className="price-table__title">
                                          <td className="classNameification">Sedans/Saloons</td>
                                          <td>per Day</td>
                                          <td>per Week</td>
                                          <td>per Month</td>
                                      </tr>
                                      <tr>
                                          <td>S01: Nissan Almera</td>
                                          <td>$50</td>
                                          <td>$315</td>
                                          <td>$1,085</td>
                                      </tr>
                                      <tr>
                                          <td>S05: Nissan Tiida</td>
                                          <td>$60</td>
                                          <td>$390</td>
                                          <td>$1,510</td>
                                      </tr>
                                  </tbody>
                                  <tbody>
                                      <tr className="price-table__title">
                                          <td className="classNameification">Hatchbacks</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td>S24: Nissan Tiida Hatchback</td>
                                          <td>$60</td>
                                          <td>$390</td>
                                          <td>$1,510</td>
                                      </tr>
                                  </tbody>
                                  <tbody>
                                      <tr className="price-table__title">
                                          <td className="classNameification">4x4 Jeeps/SUVs</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td>S12: Suzuki Samurai Soft Top</td>
                                          <td>$40</td>
                                          <td>$260</td>
                                          <td>$800</td>
                                      </tr>
                                      <tr>
                                          <td>S11:	  Suzuki Jimny Soft Top</td>
                                          <td>$50</td>
                                          <td>$325</td>
                                          <td>$1,000</td>
                                      </tr>
                                      <tr>
                                          <td>S07: Daihatsu Terios</td>
                                          <td>$55	</td>
                                          <td>$355</td>
                                          <td>$1,200</td>
                                      </tr>
                                      <tr>
                                          <td>S10: Suzuki Jimny Hard Top Manual</td>
                                          <td>$55	</td>
                                          <td>$355</td>
                                          <td>$1,300</td>
                                      </tr>
                                      <tr>
                                          <td>S25: Suzuki Jimny Hard Top Auto</td>
                                          <td>$55</td>
                                          <td>$355</td>
                                          <td>$1,300</td>
                                      </tr>
                                      <tr>
                                          <td>S09: Suzuki Grand Vitara 2dr 1.6</td>
                                          <td>$65	</td>
                                          <td>$420</td>
                                          <td>$1,500</td>
                                      </tr>
                                      <tr>
                                          <td>S17: Suzuki Grand Vitara 4dr 1.6</td>
                                          <td>$70	</td>
                                          <td>$440</td>
                                          <td>$1,500</td>
                                      </tr>
                                      <tr>
                                          <td>S18: Suzuki Grand Vitara 4dr 2.0 Manual	</td>
                                          <td>$90</td>
                                          <td>$585</td>
                                          <td>$2,000</td>
                                      </tr>
                                      <tr>
                                          <td>S23: Suzuki Grand Vitara 4dr 2.0 Auto</td>
                                          <td>$90</td>
                                          <td>$585</td>
                                          <td>$2,000</td>
                                      </tr>
                                      <tr>
                                          <td>S22:	  Honda CR-V</td>
                                          <td>$100</td>
                                          <td>$650</td>
                                          <td>$2,000</td>
                                      </tr>
                                  </tbody>
                                  <tbody>
                                      <tr className="price-table__title">
                                          <td className="classNameification">Station Wagons</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td>S20: Nissan AD Wagon</td>
                                          <td>$45</td>
                                          <td>$290</td>
                                          <td>$1,000</td>
                                      </tr>
                                      <tr>
                                          <td>S26: Nissan AD Wagon (new shape)</td>
                                          <td>$50</td>
                                          <td>$315</td>
                                          <td>$1,150</td>
                                      </tr>
                                  </tbody>
                                  <tbody>
                                      <tr className="price-table__title">
                                          <td className="classNameification">Mini-Vans</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td>S14:  Nissan Serena</td>
                                          <td>$100</td>
                                          <td>$693</td>
                                          <td>$2,383</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>


                      </div>
                  </div>
              </div>

          </main>

    <Footer/>
    </div>
  )
}
