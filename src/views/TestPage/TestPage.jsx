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
  // 
  let data = [
    {
      "categoryId": 123,
      "categoryName": "Electronics",
      "name": "Laptop Computer",
      "manufacturer": "Apple",
      "model": "MacBook Pro"
    },
    {
      "categoryId": 123,
      "categoryName": "Electronics",
      "name": "Smartphone",
      "manufacturer": "Samsung",
      "model": "Galaxy S23"
    },
    {
      "categoryId": 123,
      "categoryName": "Electronics",
      "name": "Television",
      "manufacturer": "LG",
      "model": "OLED C2"
    },
    {
      "categoryId": 456,
      "categoryName": "Furniture",
      "name": "Dining Chair",
      "material": "Wood",
      "color": "Brown"
    },
    {
      "categoryId": 456,
      "categoryName": "Furniture",
      "name": "Coffee Table",
      "material": "Glass",
      "color": "Black"
    },
    {
      "categoryId": 456,
      "categoryName": "Furniture",
      "name": "Sofa Set",
      "material": "Fabric",
      "color": "Blue"
    },
    {
      "categoryId": 789,
      "categoryName": "Clothing",
      "name": "T-Shirt",
      "size": "Medium",
      "color": "White"
    },
    {
      "categoryId": 789,
      "categoryName": "Clothing",
      "name": "Jeans",
      "size": "32",
      "color": "Blue"
    },
    {
      "categoryId": 789,
      "categoryName": "Clothing",
      "name": "Evening Dress",
      "size": "Small",
      "color": "Black"
    },
    {
      "categoryId": 101112,
      "categoryName": "Books",
      "name": "Science Fiction Novel",
      "author": "Isaac Asimov",
      "title": "Foundation"
    },
    {
      "categoryId": 101112,
      "categoryName": "Books",
      "name": "Mathematics Textbook",
      "author": "James Stewart",
      "title": "Calculus: Early Transcendentals"
    },
    {
      "categoryId": 101112,
      "categoryName": "Books",
      "name": "Graphic Novel",
      "author": "Alan Moore",
      "title": "Watchmen"
    },
    {
      "categoryId": 131415,
      "categoryName": "Food",
      "name": "Pepperoni Pizza",
      "size": "Large",
      "toppings": ["Pepperoni", "Mozzarella Cheese"]
    },
    {
      "categoryId": 131415,
      "categoryName": "Food",
      "name": "Cheeseburger",
      "size": "Single",
      "toppings": ["Beef Patty", "American Cheese", "Lettuce", "Tomato", "Onion", "Ketchup", "Mustard"]
    },
    {
      "categoryId": 131415,
      "categoryName": "Food",
      "name": "Chocolate Ice Cream",
      "size": "Small",
      "flavor": "Chocolate"
    }
  ]
  const newData = data.reduce((storeArr , item)=>{
    // const {categoryId , categoryName , name , size , flavor , manufacturer ,color , author , toppings} =item;
    if(!storeArr[item.categoryId]){
      storeArr[item.categoryId] = {};
      storeArr[item.categoryId].subItems = []
    }
    storeArr[item.categoryId].subItems.push(item);
    return storeArr;
  },Object.create(null));
  console.log(newData);

  // function handleChange(e) {
  //   setState(e.target.value);
  //   setCity(stateAndCity.find((item) => item.state === e.target.value)?.cities);
  //   setCityValue(true)

  // }
  // function handleUpdate(e) {
  //   setCityValue(e);
  // }
  // function values() {
  //   let checkboxes = document.querySelectorAll('input[name="city-checkbox"]');
  //   for (let i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].checked) {
  //       console.log(checkboxes[i].value);
  //     }
  //   }
  // const values =checkboxes?.map((checkbox)=>checkbox.value)
  // console.log(values)


// function  showCity(e) {
//   const city = stateAndCity.find((item) => item.state === e)?.cities;
//   const cityList = city
//   console.log(city)
//   // window.alert(`The cities of the selected state ${e} are: ${cityList}`);
// }

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
          <div
            className="d-flex"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {/* <div>
               
                <div style={{ color: "white" }}>
                  <h3>Table</h3>
                  <table>
                    <tr>
                      <th>State</th>
                      <th>City</th>
                      <th>shortCode</th>
                    </tr>
                    {
                      stateAndCity.map((data, index) => {
                        return (
                          <tr>
                            <td>{data?.state}</td>
                            <td>
                              <tr>
                                <td><TestModal arr={data?.cities} state={data?.state} stateAndCity={stateAndCity}/></td>
                              </tr>
                            </td>
                            <td>
                              {
                                <p>{data?.shortCode}</p>
                              }
                            </td>
                          </tr>
                        )
                      })
                    }
                  </table>
                </div>
              </div> */}

          </div>
        </div>
      </div>
    </div>
  </>
);
            }

export default TestPage;
