import React from "react";
import { FaCopy } from "react-icons/fa";
import ProfilePic from "../../images/profile.png";
const Profile = () => {
  return (
    <section className="m-1 p-1 overflow-auto bg-white profile-sidebar rounded-3">
      <div className="card mt-2 border-0">
        <div className="card-body p-2">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img src={ProfilePic} alt="..." />
            </div>
            <div className="flex-grow-1 ms-3">
              <label>
                <b>Email ID</b>
              </label>
              <br />
              <label className="text-title">appliedsw@aaspl.net</label>
            </div>
          </div>
          <hr />
          <h6 className="text-dark">Plan</h6>
          <div className="d-flex justify-content-between mt-2">
            <h5 className="text-secondary">Basic</h5>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm custom-outline-button"
            >
              Upgrade
            </button>
          </div>
          <hr />
        </div>
      </div>

      <div className="card border-secondarys">
        <div className="card-body p-2">
          <h6 className="card-title referTextSize">
            Refer your friends to us, <br /> they will each get 50 Questions
            pockets, on top of that , we will give you 50 Question pockets for
            each friend
          </h6>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control form-control-sm"
              arialabel="promoCode"
              aria-describedby="basic-addon2"
              value="Promo Code"
              readOnly
            />
            <span className="input-group-text" id="basic-addon2">
              <FaCopy />
            </span>
          </div>
        </div>
      </div>
      <div className="card mt-2 border-secondarys">
        <div className="card-body p-2">
          <h6 className="card-title">Remaining Questions</h6>
          <div className="d-flex justify-content-between mt-2">
            <h5>20/50</h5>
            <span className="text-success my-auto p-1 quoto-badge">
              40.0% of Quota Used
            </span>
          </div>
        </div>
      </div>
      <div className="card mt-2 border-secondarys">
        <div className="card-body p-2">
          <h6 className="card-title">Total Uploaded Books</h6>
          <div className="d-flex justify-content-between mt-2">
            <h5>02</h5>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://adraproductstudio.com/"
          className="text-center cancel-subscription"
        >
          cancel subscription
        </a>
      </div>
    </section>
  );
};

export default Profile;
