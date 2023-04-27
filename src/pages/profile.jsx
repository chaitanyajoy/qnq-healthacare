import Profile from "@/components/profile/profile";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Link from "next/link";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Profile" />
            <Profile />
        </Wrapper>
    );
};

export default index;
