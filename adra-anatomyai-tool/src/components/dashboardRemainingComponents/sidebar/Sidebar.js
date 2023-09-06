import React from "react";
import ADRALogo from "../../images/adra-white-logo.png";
import { FaBars } from "react-icons/fa";
import BacktoDashboardAndSignOut from "./BacktoDashboardAndSignOut";
import ListOfChapters from "./ListOfChapters";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar" id="side_nav">
        <div className="d-flex justify-content-between py-3">
          <img src={ADRALogo} className="img-responsive text-center mx-auto" alt="" />
          <button className="btn d-md-none d-block close-btn text-white">
            <FaBars />
          </button>
        </div>
        <hr className="m-2 text-white" />
        <ListOfChapters/>
        <BacktoDashboardAndSignOut/>
      </div>
    </>
  );
};

export default Sidebar;
