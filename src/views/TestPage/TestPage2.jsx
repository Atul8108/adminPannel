import React from "react";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import Header from "../../components/Header/Header";
import { useState } from "react";
import $ from "jquery";
import { useEffect } from "react";

const TestPage2 = () => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        $(".navbar-toggler").click(() => {
            setIsOpen(!isOpen);
        });
    }, [isOpen]);
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

    const [city, setCity] = useState([]);

    function getCityListByStateId(stateId) {
        if (stateId) {
            for (const item of stateAndCity) {
                if (item?.shortCode == stateId) {
                    setCity(item?.cities);
                }
            }
        } else {
            setCity([]);
        }
    }

    return (
        <>
            <div className="w-100 main d-flex global-layout">
                <LeftNav />
                <div
                    className={`main-content  ${isOpen ? "openRightNav" : "closeRightNav"
                        }`}
                >
                    <Header />

                    <div className="text-center mt-5">
                        <p style={{ color: "var(--text-color)" }}>States</p>

                        <select onChange={(e) => getCityListByStateId(e.target.value)}
                        >
                            <option value="">-- Select State--</option>
                            {stateAndCity?.map((data, index) => {
                                return <option value={data.shortCode}>{data.state}</option>;
                            })}
                        </select>

                        {city?.length > 1 && (
                            <>
                                <p style={{ color: "var(--text-color)" }}>Cities</p>
                                <select>
                                    <option value="">-- Select City--</option>
                                    {city?.map((data, index) => {
                                        return <option value={data}>{data}</option>;
                                    })}
                                </select>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestPage2;