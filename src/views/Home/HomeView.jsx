import React, { useEffect, useState } from "react";
import RightNav from "../../components/Right_Pannel/RightNav";
import LeftNav from "../../components/Left_Pannel/LeftNav"
import Header from "../../components/Header/Header";
import "./homeView.css";
import $ from 'jquery'

const HomeView = () => {

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])
  
  return (
    <>
      <div className="w-100 main d-flex global-layout">
        <LeftNav />
        <div className={`main-content  ${isOpen ? "openRightNav" : "closeRightNav"}`}>
          <Header />
          <RightNav />
        </div>
      </div>
    </>
  );
};

export default HomeView;
