import React from "react";
import ADRALogo from "./../images/adra-white-logo.png";
import Footer from "./Footer";

const SignInWithGoogle = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={ADRALogo} />
          </a>
        </div>
      </nav>
      <main className="form-signin d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1>Simplify Code Understanding</h1>
          <h6>Explore and understand code repositories fast, using GPT-4</h6>
          <button type="button" className="btn btn-primary btn-sm">
            <img src="https://appliediiot.com/Google_Signin.png" />
          </button>
          <br />
          <br />
          <span id="google_toast_msg"></span>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default SignInWithGoogle;
