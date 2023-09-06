import React from 'react'
import { FaHome,FaSignOutAlt } from "react-icons/fa";
const BacktoDashboardAndSignOut = () => {
  return (
    <>
    <ol
          className="list-group p-2 position-fixed bottom-0"
          style={{ width: "250px" }}
        >
          <li className="list-group-item">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill rounded-pills bg-secondary">
              Select Page Number
              <span className="visually-hidden">unread messages</span>
            </span>
            <div className="d-flex justify-content-evenly mt-2">
              <input
                type="text"
                className="form-control form-control-sm w-25"
                id="validationCustom01"
                placeholder="From"
                required
              />
              <input
                type="text"
                className="form-control form-control-sm w-25"
                id="validationCustom01"
                placeholder="To"
                required
              />
              <button type="button" className="btn btn-danger btn-sm bg-custom">
                GO
              </button>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start mt-1">
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <FaHome /> Back to Dashboard
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <FaSignOutAlt />
            </button>
          </li>
        </ol>
    </>
  )
}

export default BacktoDashboardAndSignOut