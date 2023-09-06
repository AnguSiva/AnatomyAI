import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import DataContext from "../../context/DataContext";

const DashboardNavbar = () => {
  const { getCloseButton} = useContext(DataContext);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light border-bottom ">
        <div className="container-fluid">
          <div className="d-flex justify-content-between d-md-none d-block">
            <button className="btn px-1 py-0 open-btn" onClick={getCloseButton}>
              <FaBars />
            </button>
          </div>
          <a
            className="navbar-brand fs-4 brand-color"
            href="adraproductstudio.com"
          >
            AnatomyAI
          </a>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
