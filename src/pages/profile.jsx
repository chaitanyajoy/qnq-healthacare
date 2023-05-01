import Profile from "@/components/profile/profile";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";

const index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(
        () => {
            if (localStorage.getItem("userLoggedIn")) setIsLoggedIn(true);
            else setIsLoggedIn(false);
        },
        [],
        isLoggedIn
    );
    if (isLoggedIn == false) {
        Router.push("/");
    }
    return (
        <>
            {isLoggedIn && (
                <Wrapper>
                    <SEO pageTitle="profile" />
                    <Profile />
                </Wrapper>
            )}
        </>
    );
};

export default index;
