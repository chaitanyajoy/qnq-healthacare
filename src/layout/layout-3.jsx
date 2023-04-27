import React from "react";
import FooterThree from "./footer/footer-3";
import HeaderThree from "./header/header-three";
import { GlobalContextProvider } from "@/components/contexts/GlobalContext";

const LayoutThree = ({ children }) => {
  return (
    <GlobalContextProvider>
      <HeaderThree  />
      <main>{children}</main>
      <div className="content-layout-right">
        <FooterThree />
      </div>
    </GlobalContextProvider>
  );
};

export default LayoutThree;
