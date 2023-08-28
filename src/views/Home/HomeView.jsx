import React from "react";
import RightNav from "../../components/Right_Pannel/RightNav";
import LeftNav from "../../components/Left_Pannel/LeftNav"
import Header from "../../components/Header/Header";
import "./homeView.css"

const HomeView = () => {
  return (
    <>
      <div className="w-100 d-flex global-layout">
        <LeftNav />
        <div className="main-content">
          <Header />
          <RightNav />
        </div>
      </div>
    </>
  );
};

export default HomeView;
