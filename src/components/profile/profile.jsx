import Counter from "@/common/counter";
import HeaderTwo from "@/layout/header/header-two";
import HeaderOne from "@/layout/header/header"
import React from "react";
import Banner from "./banner";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import Team from "@/common/team";
import FooterFour from "@/layout/footer/footer-4";
import Gallery from "../home/home-2/gallery";
import AboutContent1 from "@/common/about-content-1";
import ProfileForm from "@/common/profile-form";
import {GlobalContextProvider} from "@/components/contexts/GlobalContext";

const Profile = () => {
    return (
        <>
            <HeaderOne />
            <Banner />
            <ProfileForm />
            <FooterFour />
        </>
    );
};

export default Profile;
