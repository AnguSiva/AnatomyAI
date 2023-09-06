import React from "react";
import {FaSearch } from "react-icons/fa";
const SearchBook = () => {
  return (
    <>
      <div className="p-2 bd-highlight">
        <div className="input-group position-relative d-inline-flex align-items-center">
          <input
            className="form-control form-control-sm"            
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="searchStyle position-absolute" />
        </div>
      </div>
    </>
  );
};

export default SearchBook;
