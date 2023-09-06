import React from "react";
import Footer from "./../common/Footer";
import Sidebar from "./sidebar/Sidebar";
import SearchBook from "./mainbar/SearchBook";
import UploadBooks from "./mainbar/UploadBooks";
import ListOfBooks from "./mainbar/ListOfBooks";
import DashboardNavbar from "../common/DashboardNavbar";

const Home = () => {
  return (
    <>
      <div className="main-container d-flex">
        <Sidebar />
        <div className="content vh-100 w-100">
          <DashboardNavbar/>
          <div className="container">
            <div className="d-flex bd-highlight mb-3 mt-4">
              <UploadBooks />
              <SearchBook />
            </div>
            <hr />
            <ListOfBooks/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
