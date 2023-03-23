import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  // about content data
  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/img/about/about-family.jpg",
    popup_video: "https://www.youtube.com/watch?v=rkDsbanzu_o",
    about_thumb: "/assets/img/about/about-bg-03.png",
    title: "A Thriving healthcare operations specialist",
    sub_title: "About Qnq",
    des_1: (
      <>
        The QnQ pharmacy is committed to providing our clients services in a happy manner.
      </>
    ),
    dex_2: (
      <>
        The most rapidly growing retail chain in India is QnQ pharmacy. We offer affordable generic medications with quality assurance.
Generic medicines are synthesized using the same active ingredients, strength requirements, and safety regulations as their branded counterparts.
All kinds of health problems can be effectively and affordably treated using generic medications.The QnQ pharmacy is committed to providing our clients services in a happy manner.
      </>
    ),
    btn: "Talk with Expert",

    // booking data
    booking_bg: "/assets/img/shape/shape-bg-04.png",
    b_sub_title: "book Free consultation",
    b_title: (
      <>
        Medi Supply for Pharma Companies <br /> 
      </>
    ),
    b_btn: "  Talk to Sales",
    b_img: "/assets/img/shape/logo-shape-1.png",
  };
  const {
    about_bg,
    about_img,
    popup_video,
    about_thumb,
    sub_title,
    title,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area pt-130 tp-box-space pb-130"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img src={about_img} alt="about-thumb" />
                  <div className="about-video">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="popup-video"
                      href={popup_video}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                  <div className="about-thumb-shape d-none d-md-block">
                    <img src={about_thumb} alt="about-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h3 className="tp-section__title mb-45">{title}</h3>
                    <i>{des_1}</i>
                    <p className=" mr-20 mb-35">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link href="/about" className="tp-btn">
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-area pt-75 ">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-lg-12">
                <div
                  className="tp-cta-bg p-relative theme-light-bg pt-65 pb-70"
                  style={{
                    backgroundImage: `url(${booking_bg})`,
                  }}
                >
                  <div className="cta-content ml-90">
                    <div className="tp-section">
                      <span className="tp-section__sub-title sub-title-white left-line-white mb-20">
                        {b_sub_title}
                      </span>
                    </div>
                    <h2 className="cta-title mb-30">{b_title}</h2>
                    <div className="cta-btn">
                      <button className="tp-btn-second">
                      <i class='fa-solid fa-phone'></i>
                        {b_btn}</button>
                    </div>
                    <div className="cta-shape d-none d-md-block">
                      <img src={b_img} alt="cta-logo-shape" class='about-round-icon-logo'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default About;
