import $ from "jquery";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import TestModal from "./TestModal";

const TestPage = ({ arr }) => {
  // const [state, setState] = useState(null);
  // const [city, setCity] = useState(null);
  // const [cityValue, setCityValue] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);
  let item = [
    {
      categoryId: 1,
      categoryName: "Game",
      name: "Cricket",
      selected: true
    },
    {
      categoryId: 1,
      categoryName: "Game",
      name: "Football",
      selected: true
    },
    {
      categoryId: 1,
      categoryName: "Game",
      name: "BaseBall",
      selected: false
    },
    {
      categoryId: 2,
      categoryName: "Event",
      name: "Wedding",
      selected: false
    },
    {
      categoryId: 2,
      categoryName: "Event",
      name: "Annual Meeting",
      selected: true
    },
    {
      categoryId: 3,
      categoryName: "Lights",
      name: "Red Lights",
      selected: true
    },
    {
      categoryId: 3,
      categoryName: "Lights",
      name: "Green Lights",
      selected: false
    },
    {
      categoryId: 4,
      categoryName: "Food",
      name: "Rice",
      selected: true
    },
    {
      categoryId: 5,
      categoryName: "Drinks",
      name: "Smoothy",
      selected: false
    },
    {
      categoryId: 5,
      categoryName: "Drinks",
      name: "Package Water",
      selected: false
    }
  ]
  console.table(item)
  //  const newData = item.reduce((acc,item)=>{
  //   const { categoryId, categoryName} = item;
  //   if(!acc[categoryId]){
  //     acc[categoryId]={}
  //     acc[item.categoryId].subItems = []
  //   }
  //   if(!acc[acc.name.categoryId]){
  //     acc[acc.name.categoryId]={}
  //     acc[acc.name.categoryId].subItems =[]
  //   }else{
  //     acc[item.categoryId].subItems.push(item);
  //   }
    
  //   return acc ;
  //  }, {})
  //  console.table(newData)

  // const newData = item.reduce((storeArr, item) => {
  //   if (!storeArr[item.categoryId]) {
  //     storeArr[item.categoryId] = {};
  //     storeArr[item.categoryId].subItems = []
  //   }
  //   storeArr[item.categoryId].subItems.push(item);
  //   return storeArr;
  // }, Object.create(null));
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
            <p>Page is Down</p>
            <div  className="d-flex" style={{ justifyContent: "center", alignItems: "center",border:"2px solid black",height:"200px"}}>
              <div style={{width:"fit-content",border:"1px solid black"}}>1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPage;
