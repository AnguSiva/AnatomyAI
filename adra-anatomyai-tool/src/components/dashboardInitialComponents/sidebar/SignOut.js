import React from "react";
import Logout from "../../images/logout.png";
const SignOut = () => {
  return (
    <>
      <div className="position-fixed bottom-0 signout-width">
        <div className="card m-1">
          <div className="d-grid gap-2 signoutGridSize">
            <div className="d-flex align-items-center p-1">
              <div className="flex-shrink-0">
                <img src={Logout} alt="..." />
              </div>
              <div className="flex-grow-1 ms-5">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOut;
