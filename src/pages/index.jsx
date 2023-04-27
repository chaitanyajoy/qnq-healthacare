import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import { GlobalContextProvider } from "@/components/contexts/GlobalContext";

const index = () => {
    return (
        <GlobalContextProvider>
            <Wrapper>
                <SEO pageTitle="Home Main" />
                <Layout>
                    <HomeOne />
                </Layout>
            </Wrapper>
        </GlobalContextProvider>
    );
};

export default index;
