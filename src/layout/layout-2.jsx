import React from "react";
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";
import { GlobalContextProvider } from "@/components/contexts/GlobalContext";

const LayoutTwo = ({ children }) => {
  return (
    <GlobalContextProvider>
      <HeaderTwo />
      <main>{children}</main>
      <FooterTwo />
    </GlobalContextProvider>
  );
};

export default LayoutTwo;
