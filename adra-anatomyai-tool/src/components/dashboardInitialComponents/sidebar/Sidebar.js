import React, {useContext} from "react";
import ADRALogo from "../../images/adra-white-logo.png";
import { FaBars } from "react-icons/fa";
import Profile from "./Profile";
import SignOut from "./SignOut";
import DataContext from "../../../context/DataContext";
const Sidebar = () => {
  const { getOpenButton, openButton} = useContext(DataContext);
  
  return (
    <>
      <div className={openButton ? "sidebar active": "sidebar"} id="side_nav">
        <div className="d-flex justify-content-between py-3">
          <img src={ADRALogo} className="img-responsive text-center mx-auto" alt="" />
          <button className="btn d-md-none d-block close-btn text-white" onClick={getOpenButton}>
            <FaBars />
          </button>
        </div>
        <hr className="m-2 text-white" />
        <Profile />
        <SignOut />
      </div>
    </>
  );
};

export default Sidebar;
