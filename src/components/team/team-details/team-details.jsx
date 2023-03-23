import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import FooterTwo from "@/layout/footer/footer-2";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TeamDetailsArea from "./team-details-area";

const TeamDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <TeamDetailsArea />
      <DirectContactUs />
      <FooterTwo/>
    </>
  );
};

export default TeamDetails;
