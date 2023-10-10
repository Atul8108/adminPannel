import React from "react";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import Header from "../../components/Header/Header";
import $ from "jquery";
import { useState } from "react";
import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const TestPage = () => {
  const [stateValue, setStateValue] = useState(null);
  const [city, setCityValue] = useState(null);
  let stateAndCity = [
    {
      state: "West Bengal",
      shortCode: "WB",
      cities: ["Kolkata", "Asansol", "Darjeeling"],
    },
    {
      state: "Maharastra",
      shortCode: "MH",
      cities: ["Mumbai", "Pune", "Nagpur", "Solapur"],
    },
    {
      state: "Chennai",
      shortCode: "CH",
      cities: ["Avadi", "Tiruvottiyur"],
    },
    {
      state: "Delhi",
      shortCode: "DE",
      cities: [
        "New Delhi",
        "Meheruli",
        "Fatehpur Beri",
        "Taj Pul",
        "Kair",
        "Karala Village",
      ],
    },
  ];
  console.log(stateAndCity);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);

  function handleSelect(e) {
    setStateValue(e);

  }
  function handleChange(e) {
    setCityValue(e);
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
            <p>Page is Down</p>
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >

              <DropdownButton
                title={stateValue ?? "state"}
                id="drop-down"
                onSelect={(e) => {
                  handleSelect(e);
                }}
                style={{ color: "white !important" }}
              >
                {stateAndCity?.map((item, index) => {
                  return (
                    <>
                      <Dropdown.Item id="drop-down" eventKey={item?.state}>
                        {item?.state}
                      </Dropdown.Item>
                      <DropdownButton
                        title={setCityValue ?? "city"}
                        id="drop-down1"
                        onSelect={(e) => {
                          handleChange(e);
                        }}
                        style={{ color: "white !important" }}
                      >
                        {
                          item?.map((item1, index) => {
                            return (
                              <Dropdown.Item
                                id="drop-down1"
                                eventKey={item1?.cities}
                              >
                                {item1?.cities}
                              </Dropdown.Item>
                            )
                          })
                        }

                      </DropdownButton>
                    </>
                  );
                })}

              </DropdownButton>

              <div>
                <select state="language" id="state">
                  {
                    stateAndCity.map((item, index) => {
                      return (
                        <>
                          <option value={item.state}>{item.state}</option>
                        </>
                      )
                    })
                  }
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
