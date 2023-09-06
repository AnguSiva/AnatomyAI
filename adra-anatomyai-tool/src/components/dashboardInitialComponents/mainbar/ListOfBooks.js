import React from "react";
import { FaFilePdf } from "react-icons/fa";
const ListOfBooks = () => {
  return (
    <>
      <section className="listOfBooks">
        <div className="col-md-12">
          <div className="row grid">
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <div className="card-body text-center py-2 shadow">
                  <h3 className="card-title text-danger">
                    <FaFilePdf className="pdfFile" />
                  </h3>
                  <p className="card-text my-auto">UploadedFileName_1.pdf</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <div className="card-body text-center py-2 shadow ">
                  <h3 className="card-title text-danger">
                    <FaFilePdf className="pdfFile" />
                  </h3>
                  <p className="card-text my-auto">UploadedFileName_2.pdf</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <div className="card-body text-center py-2 shadow ">
                  <h3 className="card-title text-danger">
                    <FaFilePdf className="pdfFile" />
                  </h3>
                  <p className="card-text my-auto">UploadedFileName_3.pdf</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <div className="card-body text-center py-2 shadow ">
                  <h3 className="card-title text-danger">
                    <FaFilePdf className="pdfFile" />
                  </h3>
                  <p className="card-text my-auto">UploadedFileName_4.pdf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListOfBooks;
