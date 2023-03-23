import Link from "next/link";
import React from "react";
import ContactUs from "../forms/contact-us";


// contact_info
const contact_info = {
  address: (
    <>
      No.51, DR Building, <br/>Opposite to Aavin Factory, <br/> Villupuram-605602, India
    </>
  ),
  phone_1: "+ 91 95977 06555",
  phone_2: "+ 91 7013 908751",
  open: (
    <>
      Monday - Friday <br />
      09:00 AM - 05:00 PM
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Address line</h4>
                    <span>
                      <Link href="/contact">{address}</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone Number</h4>
                    <span>
                      <a href={`tel:${phone_1}`}>{phone_1}</a>
                    </span>
                    <span>
                      <a href={`tel:${phone_2}`}>{phone_2}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Opening Hours</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">
                  Send us a Message :
                </h4>
                <ContactUs />

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70120.44117889751!2d79.41377945675818!3d11.878009851732902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5357e1ee4f869d%3A0xbcc6f2a62d8c640e!2sQnQ%20Healthcare%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1664432405400!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
