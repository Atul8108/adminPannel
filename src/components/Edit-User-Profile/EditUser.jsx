import $ from "jquery";
import React, { useEffect, useState } from "react";
import { FaWpforms } from "react-icons/fa";
import Header from "../Header/Header";
import LeftNav from "../Left_Pannel/LeftNav";
import "./EditUser.css";

const EditUser = () => {
  function onFileSelect(e) {
    document.getElementById("pic-preview").src = URL.createObjectURL(
      e.target.files[0]
    );
  }
  useEffect(() => {}, []);
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
            <div className="user_details_box">
              <div className="user-details">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#D9EFDE"
                    fill-opacity="1"
                    d="M0,96L120,117.3C240,139,480,181,720,181.3C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                  ></path>
                </svg>
                <div className="Upload_profile">
                  <div className="Image-icon">
                     <img defaultValue={""} id="pic-preview" src={""} alt="" />
                  </div>
                  {/* <label for="profile_Image" className="custom_upload">
                    <i class="fa fa-2x fa-camera"><input
                      className="file"
                      onChange={(e) => onFileSelect(e)}
                      type="file"
                      id="profile_Image"
                      style={{ Color: "blue" }}
                    />
                    </i>
                  </label> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
