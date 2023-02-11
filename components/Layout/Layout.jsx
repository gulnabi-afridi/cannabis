import React from "react";
import Navibar from "../Common/Navibar";
import Footer from "../Common/Footer";

function Layout({ children }) {
  return (
    <>
      <Navibar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
