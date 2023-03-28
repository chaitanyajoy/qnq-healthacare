import Link from "next/link";
import React from "react";

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-105">
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:61383766284">Download Our App</a>
                      </h4>
                      <img src="https://qnqhealthcare.com/images/playstore.webp" class="embed-responsive-qr-playstore"  height="120" alt="QnQ Healthcare" title="QnQ Healthcare"></img>
                      <img src="https://qnqhealthcare.com/images/qr-code.png" class="embed-responsive-qr" height="120" alt="QnQ Healthcare" title="QnQ Healthcare"></img>
                     
                      <a href="mailto:care@qnqhealthcare.com">care@qnqhealthcare.com</a>
                    </div>
                    {/* <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-5">
                        Career
                      </span>
                      <p>
                        Nam eget dui vel quam sodales semper quis porttitor
                        <br /> tortor. Vivamus quis ex nulla ...Nam eget dui vel
                        quam <br /> sodales semper quis porttitor tortor.
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Qnq Links
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                          <Link href="/about">Help & About us</Link>
                        </li>
                        <li>
                          <Link href="/shop-details">Franchise Enquiry</Link>
                        </li>
                        <li>
                          <Link href="/">Refund Policy</Link>
                        </li>
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Products</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Opening Hours
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Sunday - Wekend Day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                       Quick Links
                    </span>
                    <div className="tp-footer-widget__links">
                      <ul>
                        <li>
                          <a href="#">Bulk Orders</a>
                        </li>
                        <li>
                          <a href="#">Pharma Sourcing</a>
                        </li>
                        <li>
                          <a href="shop-details">Investor Queries</a>
                        </li>
                        <li>
                          <a href="#">Milestones & History</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Disclaimer</a>
                        </li>
                        <li>
                          <a href="#">Legal Notices</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Find a Pharmacy</a>
                        </li>
                        <li>
                          <a href="#">Customer Feedback</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Contact Info
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>	No.51,DR Building,Opposite to Aavin Factory,Villupuram </li>
                        <li>
                          <a href="tel:(+880)15569569365">
                            (+91) 95977 06555
                          </a>
                        </li>
                        <li>
                          <a href="mailto:support@rstheme.com">
                          care@qnqhealthcare.com
                          </a>
                        </li>
                        <li>Office Hours: 8AM - 11PM</li>
                        <li>Sunday - Wekend Day</li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa-light fa-basketball"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                      © Copyright ©{new Date().getFullYear()}
                      <Link href="/"> Qnq Healthcare</Link>.
                      <i> All Rights Reserved Copyright</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Press</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
