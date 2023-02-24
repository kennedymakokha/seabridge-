import React from "react";
import Image from './why.jpg'
const Content = () => {
    return (
        <>
            <main id="body-content">
                <section className="wide-tb-80">
                    <div className="container pos-rel">
                        <div className="row align-items-center">
                            <div className="col-md-6 wow fadeInLeft" data-wow-duration="0" data-wow-delay="0s">
                                <h2 className="mb-4 fw-7 txt-blue">
                                    About <span className="fw-6 txt-orange">seabridge</span>
                                </h2>
                                <p style={styles.paragragh}>Seabridge Forwarders Ltd. was incorporated in 1996. Within this period of over 20 yrs, we have distinguished ourselves as a major player in Freight Industry in Kenya.
                                </p>
                                <p style={styles.paragragh}>
                                    Our Head Office is located at Signature Mall 3rd Floor on Mombasa Road.
                                    We operate branch offices at Kilindini Mombasa, Jomo Kenyatta International Airport, Inland Container Depot – Embakasi Nairobi and all the main border stations throughout the Country.
                                </p>
                                <p style={styles.paragragh}>
                                    Worldwide we are a member of a network of freight agents in major cities of the world (IFLN).</p>
                                <p style={styles.paragragh}>
                                    Seabridge forwaders is now a member of KIFWA (Kenya International Freight and Warehousing Assiosiation).</p>

                                <p style={styles.paragragh}> We have a dedicated qualified and dedicated workforce with computerised operation system </p>
                                <p style={styles.paragragh}>
                                    Seabridge Forwaders limited are therefore  able to provide fast efficient and reliable services to our esteemed clients
                                </p>
                            </div>
                            <div className="col-md-6 wow fadeInRight" data-wow-duration="0" data-wow-delay="0s">

                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="wide-tb-80">
                    <div className="container pos-rel">
                        <div className="row align-items-center">
                            <div className="col-md-6 wow fadeInLeft" data-wow-duration="0" data-wow-delay="0s">
                                <div style={{ backgroundColor: 'red' }}>
                                    <h2 className="mb-4 fw-7 txt-blue">
                                        Our <span className="fw-6 txt-orange">Mission</span>
                                    </h2>
                                </div>
                                <div>
                                    <p style={styles.paragragh}>Our Mission is to provide quick, efficient and cost-effective solutions for all your freight needs,
                                        to be the only choice of importer and exporter by providing all clients with the highest level of service and offering an excellent service orientated approach in addressing all their Logistics, Custom and Licensing needs.</p>
                                    <p style={styles.paragragh}>The company is run by a team of highly experienced clearing agents in Nairobi Kenya with an extensive knowledge of handling cargo shipment across all continents & countries</p>

                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInRight" data-wow-duration="0" data-wow-delay="0s">
                                <div style={{ backgroundColor: 'red' }}>
                                    <h2 className="mb-4 fw-7 txt-blue">
                                        Core <span className="fw-6 txt-orange">Values</span>
                                    </h2>
                                </div>
                                <div>
                                    <ul>
                                         <li> Loyalty</li ><li> Honesty</li ><li> Trust</li ><li> Ingenuity</li ><li> Accountability</li ><li> Simplicity</li ><li> Respect</li ><li> Value-centricity</li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section> */}
                <div style={{ marginRight: "18%", marginLeft: "18%", display: "flex" }} >
                    <div style={{ width: '50%', }} >
                        <div >
                            <h2 className="mb-4 fw-7 txt-blue">
                                Our <span className="fw-6 txt-orange">Mission</span>
                            </h2>
                        </div>
                        <div>
                            <p style={styles.paragragh}>Our Mission is to provide quick, efficient and cost-effective solutions for all your freight needs,
                                to be the only choice of importer and exporter by providing all clients with the highest level of service and offering an excellent service orientated approach in addressing all their Logistics, Custom and Licensing needs.</p>
                            <p style={styles.paragragh}>The company is run by a team of highly experienced clearing agents in Nairobi Kenya with an extensive knowledge of handling cargo shipment across all continents & countries</p>

                        </div>
                    </div>
                    <div style={{ width: '40%', }} >
                        <div >
                            <h2 className="mb-4 fw-7 txt-blue">
                                Core <span className="fw-6 txt-orange">Values</span>
                            </h2>
                        </div>
                        <div>
                            <ul style={{

                            }}>
                                <li style={styles.paragragh}> Loyalty</li >
                                <li style={styles.paragragh}> Honesty</li >
                                <li style={styles.paragragh}> Trust</li >
                                <li style={styles.paragragh}> Ingenuity</li >
                                <li style={styles.paragragh}> Accountability</li >
                                <li style={styles.paragragh}> Simplicity</li >
                                <li style={styles.paragragh}> Respect</li >
                                <li style={styles.paragragh}> Value-centricity</li>

                            </ul>
                        </div>
                    </div>
                </div>

                <section className="bg-light-gray wide-tb-100 pb-5 why-choose">
                    <div className="container pos-rel">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
                                <h1 className="heading-main">
                                    <span>Our Goodness</span>
                                    What Makes Us Special
                                </h1>
                            </div>
                            <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0s">
                                <div className="icon-box-2">
                                    <div className="media">
                                        <div className="service-icon">
                                            <i className="icofont-id"></i>
                                        </div>
                                        <div className="service-inner-content media-body">
                                            <h4 className="h4-md">Trusted Franchise</h4>
                                            <p style={styles.paragragh}>Sea Bridge guarantees of safety to your cargo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
                                <div className="icon-box-2">
                                    <div className="media">
                                        <div className="service-icon">
                                            <i className="icofont-live-support"></i>
                                        </div>
                                        <div className="service-inner-content media-body">
                                            <h4 className="h4-md">Customer Support</h4>
                                            <p style={styles.paragragh}>We give 24 Hour Customer support .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.4s">
                                <div className="icon-box-2">
                                    <div className="media">
                                        <div className="service-icon">
                                            <i className="icofont-history"></i>
                                        </div>
                                        <div className="service-inner-content media-body">
                                            <h4 className="h4-md">Reliability & Punctuality</h4>
                                            <p style={styles.paragragh}>Sea bridge has proven beyond any doubt of punctual and reliable service .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="wide-tb-60 p-0 bg-light-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 wow pulse animated" data-wow-duration="0" data-wow-delay="0.7s">
                                <div className="bg-fixed pos-rel video-popup">
                                    <div className="bg-overlay black opacity-50"></div>
                                    <div className="zindex-fixed pos-rel">
                                        <a href="#" className="play-video"><i className="icofont-play icofont-4x"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="wide-tb-100 mb-spacer-md">
                    <div className="container wide-tb-100 pb-0">
                        <div className="row d-flex align-items-center">
                            <div className="col col-12 col-lg-3 col-sm-6 wow slideInUp" data-wow-duration="0" data-wow-delay="0s">
                                <div className="counter-style-1 light-bg">
                                    <p className="mb-1"><i className="icofont-google-map"></i></p>
                                    <span className="counter">15</span>
                                    <div>
                                        Our Locations
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-3 col-sm-6 wow slideInUp" data-wow-duration="0" data-wow-delay="0.3s">
                                <div className="counter-style-1 light-bg">
                                    <p className="mb-1"><i className="icofont-globe"></i></p>
                                    <span className="counter">110</span>
                                    <span>+</span>
                                    <div>
                                        Clients Worldwide
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 d-none d-sm-block d-lg-none spacer-60"></div>
                            <div className="col col-12 col-lg-3 col-sm-6 wow slideInUp" data-wow-duration="0" data-wow-delay="0.6s">
                                <div className="counter-style-1 light-bg">
                                    <p className="mb-1"><i className="icofont-vehicle-delivery-van"></i></p>
                                    <span className="counter">240</span>
                                    <span>+</span>
                                    <div>
                                        Owned Vehicles
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-3 col-sm-6 wow slideInUp" data-wow-duration="0" data-wow-delay="0.9s">
                                <div className="counter-style-1 light-bg">
                                    <p className="mb-1"><i className="icofont-umbrella-alt"></i></p>
                                    <span className="counter">5440</span>
                                    <div>
                                        Tonnes Transported
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pos-rel bg-sky-blue">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-12 p-0">
                                <img src={Image} alt="" className="w-100" />
                                {/* <img src="./whyus.jpg" alt="" /> */}
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="p-5 ">
                                    <h1 className="heading-main text-left mb-4">
                                        <span>Why Choose</span>
                                        seabridge
                                    </h1>
                                    <ul className="list-unstyled icons-listing theme-orange w-half mb-0">
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0s"><i className="icofont-check"></i>Deliver Environmentally Responsible Client Services</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.1s"><i className="icofont-check"></i>Be an Active Community Partner</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s"><i className="icofont-check"></i>Drive Continuous Improvement</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.3s"><i className="icofont-check"></i>Clearance and compliance service</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.4s"><i className="icofont-check"></i>Clearance and compliance service</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.5s"><i className="icofont-check"></i>Maintain High Ethical Standards</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.6s"><i className="icofont-check"></i>Air & Ocean Cargo Insurance</li>
                                        <li className="wow fadeInUp" data-wow-duration="0" data-wow-delay="0.7s"><i className="icofont-check"></i>We ensure complete security</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="wide-tb-100 pb-0 team-section-bottom pos-rel">
                    <div className="container">
                        <div className="col-sm-12">
                            <h1 className="heading-main">
                                <span>Face Behind seabridge</span>
                                Our Team
                            </h1>
                        </div>
                        <div className="row pb-4">
                            <div className="col-sm-12 col-md-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0s">
                                <div className="team-section-two">
                                    <img src="images/team/team-1.jpg" alt="" className="rounded" />
                                    <h4 className="h4-md txt-orange">John Morise</h4>
                                    <h5 className="h5-md txt-ligt-gray">Founder</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.1s">
                                <div className="team-section-two">
                                    <img src="images/team/team-2.jpg" alt="" className="rounded" />
                                    <h4 className="h4-md txt-orange">Kevin Mash</h4>
                                    <h5 className="h5-md txt-ligt-gray">Head Operational</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
                                <div className="team-section-two">
                                    <img src="images/team/team-3.jpg" alt="" className="rounded" />
                                    <h4 className="h4-md txt-orange">Mike Douglos</h4>
                                    <h5 className="h5-md txt-ligt-gray">Team Lead Support</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="bg-white wide-tb-100 mb-spacer-md">
                    <div className="container">
                        <div className="col-sm-12">
                            <h1 className="heading-main">
                                <span>Request a </span>
                                Free Quote
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 wow fadeInRight" data-wow-duration="0" data-wow-delay="0.2s">
                                <div className="align-self-stretch h-100 align-items-center d-flex bg-with-text">
                                    Whether you require distribution or fulfillment, defined freight forwarding, or a complete supply chain solution, we are here for you.
                                </div>
                            </div>
                            <div className="w-100 d-none d-sm-block d-lg-none spacer-60"></div>
                            <div className="col-lg-8 wow fadeInLeft" data-wow-duration="0" data-wow-delay="0.2s">
                                <form action="#" method="post" noValidate="novalidate" className="rounded-field gray-field">
                                    <div className="form-row mb-4">
                                        <div className="col">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" name="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="col">
                                            <select title="Please choose a package" required="" name="package" className="custom-select" aria-required="true" aria-invalid="false">
                                                <option value="">Transport Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                                <option value="Type 3">Type 3</option>
                                                <option value="Type 4">Type 4</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <select title="Please choose a package" required="" name="package" className="custom-select" aria-required="true" aria-invalid="false">
                                                <option value="">Type of freight</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                                <option value="Type 3">Type 3</option>
                                                <option value="Type 4">Type 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="col">
                                            <textarea rows="7" placeholder="Message" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row text-center">
                                        <button type="submit" className="form-btn mx-auto btn-theme bg-orange">Request Quote <i className="icofont-rounded-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="wide-tb-100 bg-fixed clients-bg pos-rel">
                    <div className="bg-overlay blue opacity-80"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
                                <h1 className="heading-main">
                                    <span>SOME OF OUR</span>
                                    Clients
                                </h1>
                            </div>
                            <div className="col-sm-12 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
                                <div className="owl-carousel owl-theme" id="home-clients">
                                    <div className="item">
                                        <img src="images/clients/client1.png" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="images/clients/client2.png" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="images/clients/client3.png" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="images/clients/client4.png" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="images/clients/client5.png" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="images/clients/client6.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="wide-tb-100 faqs">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="heading-main">
                                    <span>Frequently Asked</span>
                                    Questions
                                </h1>
                            </div>
                            <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0" data-wow-delay="0s">
                                <h4 className="h4-md mb-3">Lobortis sit magna ornare magna egestas?</h4>
                                <p style={{color:'black',fontSize:82}}>Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit vitae purus laoreet</p>
                            </div>
                            <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
                                <h4 className="h4-md mb-3">Aliquam dapibus pretium ornare?</h4>
                                <p style={{color:'black',fontSize:82}}>Feugiat eros ligula massa lipsum primis in orci luctus et ultrices posuere cubilia curae congue lorem. ante ipsum primis in faucibus bibendum sit amet in odio</p>
                            </div>
                            <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.4s">
                                <h4 className="h4-md mb-3">Placeat axime facere omnis volute?</h4>
                                <p style={{color:'black',fontSize:82}}>Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit vitae purus laoreet</p>
                            </div>
                            <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.6s">
                                <h4 className="h4-md mb-3">Dapibus lobortis pretium ornare?</h4>
                                <p style={{color:'black',fontSize:82}}>Feugiat eros ligula massa lipsum primis in orci luctus et ultrices posuere cubilia curae congue lorem. ante ipsum primis in faucibus bibendum sit amet in odio</p>
                            </div>
                            <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.8s">
                                <h4 className="h4-md mb-3">An interdum lobortis pretium ornare?</h4>
                                <p style={{color:'black',fontSize:82}}>Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit vitae purus laoreet</p>
                            </div>
                            <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.9s">
                                <h4 className="h4-md mb-3">Interdum lobortis pretium ornare?</h4>
                                <p style={{color:'black',fontSize:82}}>Feugiat eros ligula massa lipsum primis in orci luctus et ultrices posuere cubilia curae congue lorem. ante ipsum primis in faucibus bibendum sit amet in odio</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="wide-tb-80 bg-scroll bg-img-6 pos-rel callout-style-1">
                    <div className="bg-overlay blue opacity-60"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 mb-0 wow slideInUp" data-wow-duration="0" data-wow-delay="0.1s">
                                <h4 className="h4-xl">Interested in working with seabridge?</h4>
                            </div>
                            <div className="col wow slideInUp" data-wow-duration="0" data-wow-delay="0.2s">
                                <div className="center-text">
                                    We don’t just manage suppliers, we micro-manage them. We have a consultative, personalized approach
                                </div>
                            </div>
                            <div className="col-sm-auto wow slideInUp" data-wow-duration="0" data-wow-delay="0.3s">
                                <a href="#" className="btn btn-theme bg-white bordered">Get In Touch <i className="icofont-rounded-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
};
export default Content;
const styles = {
    paragragh: {
        color: 'black',
        fontSize: 18,
    }
}
