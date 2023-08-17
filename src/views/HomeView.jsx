import React from "react";
import RightNav from "../components/Right_Pannel/RightNav";
import LeftNav from "../components/Left_Pannel/LeftNav"

const HomeView = () => {
  return (
    <>
      <div className="w-100 d-flex">
      <LeftNav/>
      <RightNav/>
      </div>
    </>
  );
};

export default HomeView;
