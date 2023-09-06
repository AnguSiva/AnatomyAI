import React from "react";
import AddBook from "../../images/addBook.png";
const UploadBooks = () => {
  return (
    <>
      <div className="me-auto bd-highlight">
        <div
          className="card p-2 rounded-3 upload-card"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img src={AddBook} alt="No Logo" width={35} />
            </div>
            <div className="flex-grow-1 ms-3">Add your Book</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add your book
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <form method="post">
                      <div className="form-group files">
                        <input type="file" className="form-control" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadBooks;
