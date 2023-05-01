import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { GlobalContextProvider } from "@/components/contexts/GlobalContext";

const Layout = ({ children }) => {
    return (
        <GlobalContextProvider>
            <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
        </GlobalContextProvider>
        
    );
};

export default Layout;
