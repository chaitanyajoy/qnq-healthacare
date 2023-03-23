import Brands from "@/common/brands";
import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Choose from "./choose";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import NewsLetter from "./news-letter";
import Service from "./service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";
import Blog from "./blog";
import ServiceArea from "../home/service-area";
import Feedback from "../home/feedback";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import SliderHome from "@/components/slider/Slider";

const HomeTwo = () => {
  return (
    <>
    <SliderHome/>
      {/* <HeroBanner /> */}
      <About />
      <ServiceArea/>
      {/* <Service /> */}
      <NavTab/>
      <Gallery />
      
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
    </>
  );
};

export default HomeTwo;
