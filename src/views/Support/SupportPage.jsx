import $ from "jquery";
import React, { useEffect, useState } from "react";
import support from "../../assets/bg1.png";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import "./SupportPage.css";
import phoneicon from "../../assets/phone.svg";
import email from "../../assets/email.svg";




const SupportPage = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 600);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);
  return (
    <>
      <div className="w-100 d-flex global-layout">
        <LeftNav />
        <div
          className={`main-content ${
            isOpen ? "openRightNav" : "closeRightNav"
          }`}
        >
          <Header />
          <div className={`RightNav`}>
            {/* <div className='d-flex error-404' style={{justifyContent:'center', alignItems:'center'}}>
              <img  src='https://cdn.dribbble.com/userupload/8726278/file/original-ab1bde6f9c74de5c8961f7fe84990cd4.gif' alt='404' style={{width:'60%'}} />
            </div> */}
            <div
        className="d-flex"
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="left_container">
          <img
            src={support}
            className="img-fluid"
            alt="Sampleimage"
            style={{width:'500px'}}
          />
        </div>
        <div className="right-container">
          <form>
            <div
              className="d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <p className="m-0">Support / Contact</p>
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column login-input-group">
              <div className="group">
                <img className="password_icon" src={phoneicon} alt=".." />
                <input
                  className="input"
                  type="tel"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  maxlength="10"
                  required
                />
              </div>
              <br />
              <div className="group">
              <img className="password_icon" src={email} alt=".." />
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="email"
                />
              </div>
              
              <br />
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                style={{ width: "250px" }}
              >
                Send
              </button>
            </div>
          </form>

        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const filteredBlogList = bloglist.filter((blog) => blog.status === e);
// setbloglist(filteredBlogList);
// setCurrentPost(filteredBlogList.slice(firstPostIndex, lastPostIndex));
export default SupportPage;
