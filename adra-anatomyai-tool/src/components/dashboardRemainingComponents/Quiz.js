import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Footer from "../common/Footer";
import DashboardNavbar from "../common/DashboardNavbar";
import ListofQuestions from "./mainbar/ListofQuestions";

const Quiz = () => {
  return (
    <>
      <div className="main-container d-flex">
        <Sidebar />
        <div className="content vh-100 w-100">
          <DashboardNavbar />
          <ListofQuestions/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
