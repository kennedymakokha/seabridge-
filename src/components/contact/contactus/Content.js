import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content" style={{ backgroundColor: "black" }}>
                <section className="wide-tb-80 contact-full-shadow" style={styles.paragragh}>
                    <div className="container">
                        <div className="contact-map-bg">
                            <img src="images/map-bg.png" alt="" />
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12 col-lg-5 wow fadeInRight" data-wow-duration="0" data-wow-delay="0s">
                                <div className="contact-detail-shadow">
                                    <h4>Nairobi</h4>
                                    <div className="d-flex align-items-start items" style={styles.paragragh}>
                                        <i className="icofont-google-map"></i> <span>Head Office,
                                            P.O.Box 38742 - 00500, Signature Mall 3rd floor ,

                                        </span>
                                    </div>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-phone"></i> <span>+254 20 816 9661</span>
                                    </div>
                                    <div className="text-nowrap d-flex align-items-start items">
                                        <i className="icofont-email"></i> <a href="#">info@seabridge.co.ke.</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-5 wow fadeInLeft" data-wow-duration="0" data-wow-delay="0s">
                                <div className="contact-detail-shadow">
                                    <h4>Mombasa</h4>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-google-map"></i> <span>
                                            Kilindini</span>
                                    </div>
                                    <div className="d-flex align-items-start items">
                                        <i className="icofont-phone"></i> <span>+254 20 816 9661
                                            +254 20 205 9084, +254 738 061 814</span>
                                    </div>
                                    <div className="text-nowrap d-flex align-items-start items">
                                        <i className="icofont-email"></i> <a href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wide-tb-100 bg-light-gray pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-8 offset-lg-2 wow fadeInUp" data-wow-duration="0" data-wow-delay="0s">
                                <div className="free-quote-form contact-page">
                                    <h1 className="heading-main mb-4">
                                        Get in touch
                                    </h1>
                                    <form action="#" method="post" id="contactusForm" noValidate="novalidate" className="col rounded-field">
                                        <div className="form-row mb-4">
                                            <div className="col">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                            </div>
                                            <div className="col">
                                                <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-row mb-4">
                                            <div className="col">
                                                <select title="Please choose a package" required="" name="Transport_Package" id="Transport_Package" className="custom-select" aria-required="true" aria-invalid="false">
                                                    <option value="">Transport Type</option>
                                                    <option value="Type 1">Type 1</option>
                                                    <option value="Type 2">Type 2</option>
                                                    <option value="Type 3">Type 3</option>
                                                    <option value="Type 4">Type 4</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <select title="Please choose a package" required="" name="Freight_Package" id="Freight_Package" className="custom-select" aria-required="true" aria-invalid="false">
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
                                                <textarea rows="7" name="cment" id="cment" placeholder="Message" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-row text-center">
                                            <button name="contactForm" id="contactForm" type="button" className="form-btn mx-auto btn-theme bg-orange">Submit Now <i className="icofont-rounded-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map-bg">
                    <div id="map-holder" className="pos-rel">
                        <div id="map_extended">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.598135455332!2d36.9534435!3d-1.4170493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b355716bf25%3A0xe1c1d3e8a9552300!2sSignature%20Mall!5e0!3m2!1sen!2ske!4v1677552667723!5m2!1sen!2ske" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5981354571118!2d36.95125481475412!3d-1.4170492989665175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b355716bf25%3A0xe1c1d3e8a9552300!2sSignature%20Mall!5e0!3m2!1sen!2ske!4v1668481694621!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                    </div>
                </section>
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