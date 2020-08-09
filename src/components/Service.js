import React, {useState} from 'react'
import CarDisplay from './CarDisplay'
import socialMediamarketing from '../images/social_media.jpg'
import analytic from '../images/analitics.jpeg'
import consult from '../images/consult.jpeg'
import branding from '../images/branding.jpg'
import email_marketing from '../images/email_marketing.jpg'
import support from '../images/surpport.jpg'
import web_development from '../images/WEBDEV.jpg'
import seo_sem from '../images/seo_sem.jpg'
// import socialMediamarketing from '../images/social_media.jpg'

export default function Service() {
    return (
        <section className="container">
            <div id="services" >
                <h1>our services</h1>
                <p>Our strategy involves sending targeted traffic to your website through tailored means in<br /> order to generate customers and leads to help your business grow</p>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={socialMediamarketing} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">SOCIAL MEDIA MARKETING</h5></div>
                            <div className="details">
                                <div className="content">
                                <h2>SOCIAL MEDIA MARKETING</h2>
                                <p>Our social media marketing strategy is built on the foundation of driving measurable results through the use of social media.</p>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={web_development} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">WEB DEVELOPMENT</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">WEB DEVELOPMENT</h2>
                                    <p className="card-text">Our experienced team of web designers and developers use best practices to create custom websites that are user friendly and responsive.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={branding} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">BRANDING</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">BRANDING</h2>
                                    <p className="card-text">Our experts bring your vision into reality via unique designs that suits your strategy and business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={seo_sem} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">SEO & SEM</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">SEO & SEM</h2>
                                    <p className="card-text">Our expert team will bring you the best Search Engine Optimization practices to increase traffic flow to your website.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={email_marketing} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">EMAIL MARKETING</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">EMAIL MARKETING</h2>
                                    <p className="card-text">Drive in more clients as our talented content writers deliver them through emails.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={analytic} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">ANALYTICS</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">ANALYTICS</h2>
                                    <p className="card-text">We measure our success through the result we drive for our clients.</p>
                                <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={consult} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">CONSULTING</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">CONSULTING</h2>
                                    <p className="card-text">Meet with us and we will give you direction and guide on taking your business to the next level.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card bg-dark hover-4 text-white">
                            <img src={support} className="card-img" alt="..." />
                            <div className="hover-overlay"><h5 className="card-title">CLIENT SUPPORT</h5></div>
                            <div className="details">
                                <div className="content">
                                    <h2 className="card-title">CLIENT SUPPORT</h2>
                                    <p className="card-text">After all these, we give you the necessary support needed at all times.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
