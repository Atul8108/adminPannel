import $ from "jquery";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/Left_Pannel/LeftNav";

const TestPage = () => {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [cityValue, setCityValue] = useState(false);
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

  console.log(stateAndCity)
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);

  function handleChange(e) {
    setState(e.target.value);
    setCity(stateAndCity.find((item) => item.state === e.target.value)?.cities);
    setCityValue(true)

  }
  function handleUpdate(e) {
    setCityValue(e);
  }
  function values() {
    let checkboxes = document.querySelectorAll('input[name="city-checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        console.log(checkboxes[i].value);
      }
    }
    // const values =checkboxes?.map((checkbox)=>checkbox.value)
    // console.log(values)
  }

  function handleShow() {
    const state = document.querySelector("select")?.value;
    const city = stateAndCity.find((item) => item.state === state)?.cities;
    console.log(city)
    window.alert(`The cities of the selected state ${state} are: ${city?.join(", ")}`);
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
              <div>
                {/* <select
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option>states</option>
                  {stateAndCity.map((states, index) => {
                    return (
                      <>
                        <option value={states.state}>
                          {states.state}
                        </option>
                      </>
                    );
                  })}
                </select>
                <br />
                <br />
                <div className="d-flex" style={{ gap: "10px", justifyContent: 'center', alignItems: 'center' }}>
                  {
                    city?.map((data, index) => {
                      return (
                        <>
                          <input type="checkbox" name="city-checkbox" value={data} />
                          <p className="m-0" id={index} style={{ color: "var(--text-color)" }}>{data}</p>
                        </>
                      )
                    })
                  }
                </div>
                <br />
                <button className="btn btn-primary" onClick={values}>submit</button> */}
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
                                <td><button className="btn btn-primary" onClick={handleShow}>View City</button></td>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
