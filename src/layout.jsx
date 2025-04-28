import React from "react";
import Navbar from "./component/Navbar"
import "./Global.css";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#161716] min-h-screen text-white">
      <Navbar />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default Layout;
