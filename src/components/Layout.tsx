import React from "react";
import "../css/style.css";
import Sidebar from "./Sidebar.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <div className="row">
          <Outlet />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
