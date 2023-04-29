import Brands from "@/common/brands";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Blog from "./blog";
import Counter from "../../../common/counter";
import Cta_Area from "./cta-area";
import Feedback from "./feedback";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";
import NewsLetter from "./news-letter";
import SliderHome from "@/components/slider/Slider";
import NavTab from "@/common/nav-tab";

const HomeOne = () => {
  return (
    <>

<SliderHome/>
      {/* <HeroBanner /> */}
      <About />
      <NavTab/>
      <ServiceArea/>
      {/* <Service /> */}
      
      {/* <Gallery /> */}
      
      <Specialists/>
      <Counter cls="pt-80 pb-100" />
      {/* <Choose /> */}
      {/* <Appointment /> */}
      {/* <Brands border_style={true} /> */}
      {/* <Team /> */}
      <Feedback/>
      {/* <Testimonial bg_img={true} /> */}
      {/* <Blog /> */}
      <NewsLetter />
      {/* <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
      <Gallery />
      <Specialists />
      <Appointment />
      <Team />
      <Feedback />
      <Brands />
      <Cta_Area />
      <NewsLetter/> */}
      {/* <Blog /> */}
    </>
  );
};

export default HomeOne;
