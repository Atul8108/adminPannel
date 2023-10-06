import $ from "jquery";
import React, { useEffect, useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { USERINFO } from "../../api/locaStorage.data";
import Header from "../Header/Header";
import LeftNav from "../Left_Pannel/LeftNav";
import "./EditUser.css";
import { toast } from "react-toastify";

const EditUser = () => {
  useEffect(() => {
    localStorage.getItem(USERINFO());
  }, []);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 600);
  let userData = JSON.parse(USERINFO());
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);
  function onFileSelect(e) {
    document.getElementById("pic-preview").src = URL.createObjectURL(
      e.target.files[0]
    );
  }

  function handleUpdate() {
    console.log("working")
    const firstname = document.getElementById("firstname")
    console.log(firstname.value)
    const lastname = document.getElementById("lastname")
    const email = document.getElementById('inputEmail')
    const addressOne = document.getElementById('inputAddress1')
    const city = document.getElementById('inputCity')
    const states = document.getElementById("inputState")
    const profile_img = document.getElementById("pic-preview").src

    let userUpdateInfo = {
      "userName": firstname?.value,
      "lastName": lastname?.value,
      "email": email?.value,
      "addressOne": addressOne?.value,
      "city": city?.value,
      "states": states?.value,
      "profileImg": profile_img
    }
    userUpdateInfo.isComplete = Object.keys(userUpdateInfo).every((k) => !userUpdateInfo[k] == "");
    localStorage.setItem("userInfo", JSON.stringify(userUpdateInfo))
    toast.success("Profile Updated")
  }

  return (
    <>
      <div className="w-100 d-flex global-layout">
        <LeftNav />
        <div
          className={`main-content ${isOpen ? "openRightNav" : "closeRightNav"
            }`}
        >
          <Header />
          <div className={`RightNav`}>
            <div className="user_details_box">
              <div className="user-details">
                <div className="Upload_profile">
                  <div className="Image-icon">
                    <img
                      defaultValue={userData?.profileImg}
                      id="pic-preview"
                      src={""}
                      alt=""
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://uam-cdn.nextlevel.app/company/4335afcd-f776-4423-9d7b-4f30ae4033f7?6y7HZIZhQxws1dvJBZWcj0s6NYdlfUsV";
                      }}
                    />
                    <label for="profile_Image" className="custom_upload">
                      <BsPlusSquareFill size={30} color={"#453465"} style={{ borderRadius: '100%' }} />
                      <input
                        className="file"
                        onChange={(e) => onFileSelect(e)}
                        type="file"
                        id="profile_Image"
                        style={{ Color: "blue" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="user-details-info">
                <h4>General Details</h4>
                <div className="row">
                  <div className="col-md-6">
                    <label for="inputName">Name</label>
                    <input
                      defaultValue={userData?.userName}
                      type="first name"
                      className="user_details_input"
                      id="firstname"
                      placeholder="first name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputName">Last Name</label>
                    <input
                      defaultValue={userData?.lastName}
                      type="last name"
                      className="user_details_input"
                      id="lastname"
                      placeholder="last name"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail">Email</label>
                    <input
                      defaultValue={userData?.email}
                      type="email"
                      className="user_details_input"
                      id="inputEmail"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputAddress">Address</label>
                    <input
                      defaultValue={userData?.addressOne}
                      type="text"
                      className="user_details_input"
                      id="inputAddress1"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      defaultValue={userData?.city}
                      type="text"
                      className="user_details_input"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputState">State</label>
                    <select
                      defaultValue={userData?.states}
                      id="inputState"
                      className="user_details_input"
                    >
                      <option selected disabled>
                        Choose...
                      </option>
                      <option value="Andra Pradesh">Andra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">
                        Himachal Pradesh
                      </option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madya Pradesh">Madya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Orissa">Orissa</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttaranchal">Uttaranchal</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                      <option
                        disabled
                        style={{ backgroundColor: "#aaa", color: "#fff" }}
                      >
                        UNION Territories
                      </option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadar and Nagar Haveli">
                        Dadar and Nagar Haveli
                      </option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadeep">Lakshadeep</option>
                      <option value="Pondicherry">Pondicherry</option>
                    </select>
                  </div>
                  <div className="col-md-6 ms-auto">
                    <div
                      className="d-flex justify-content-between"
                      style={{ gap: "10px" }}
                    >
                      <button className="btn btn-primary w-100" onClick={() => { handleUpdate() }}>
                        Submit
                      </button>
                      <Link to="/create-blog" className="w-100">
                        <button className="w-100 btn btn-warning small">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
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
