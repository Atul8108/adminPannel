import $ from "jquery";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import "./TestModal.css";

const TestPage2 = () => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        $(".navbar-toggler").click(() => {
            setIsOpen(!isOpen);
        });
    }, [isOpen]);
    let item = [
        {
            id: 12,
            categoryId: 1,
            categoryName: "Game",
            name: "Cricket",
            selected: true
        }, {
            id: 15,
            categoryId: 2,
            categoryName: "Event",
            name: "Wedding",
            selected: false
        }, {
            id: 20,
            categoryId: 3,
            categoryName: "Lights",
            name: "Red Lights",
            selected: true

        }, {
            id: 1,
            categoryId: 1,
            categoryName: "Game",
            name: "Football",
            selected: true
        }, {
            id: 5,
            categoryId: 5,
            categoryName: "Drinks",
            name: "Smoothy",
            selected: false
        }, {
            id: 4,
            categoryId: 4,
            categoryName: "Food",
            name: "Rice",
            selected: true
        }, {
            id: 3,
            categoryId: 1,
            categoryName: "Game",
            name: "BaseBall",
            selected: false
        }, {
            id: 55,
            categoryId: 3,
            categoryName: "Lights",
            name: "Green Lights",
            selected: false
        }, {
            id: 22,
            categoryId: 1,
            categoryName: "Game",
            name: "Annual Meeting",
            selected: true
        }, {
            id: 45,
            categoryId: 5,
            categoryName: "Drinks",
            name: "Package Water",
            selected: false
        }, {
            id: 17,
            categoryId: 1,
            categoryName: "Game",
            name: "Hockey",
            selected: false
        },
    ]
    
    const groupedItems = item.reduce((groupedItemsS, item) => {
            console.log(item)
            console.log(groupedItemsS)
        if (!groupedItemsS[item.categoryId]) {
            groupedItemsS[item.categoryId] = item;
            groupedItemsS[item.categoryId].subItems = [];
        }
        
        groupedItemsS[item.categoryId].subItems.push(item)
        return groupedItemsS;
    }, {});
    console.log(groupedItems)

    function handleSubmit() {
        let localData = item;
        let checkboxValue = document.querySelectorAll('input[name="checkbox"]:checked')
        for (let i = 0; i < checkboxValue.length; i++) {
            for (const data of localData) {
                if (data.id == checkboxValue[i].value) {
                    data.selected = true;
                } else {
                    data.selected = false;
                }
            }
        }
        console.log(localData);
    }

    return (
        <>
            <div className="w-100 main d-flex global-layout">
                <LeftNav />
                <div
                    className={`main-content  ${isOpen ? "openRightNav" : "closeRightNav"}`}
                >
                    <Header />
                    <div className="mt-5">
                        <div className="test-bg">
                            {
                                Object.values(groupedItems)?.map((data, index) => {
                                    return (
                                        <>
                                            <div className="serialNo-heading">
                                                <p className="m-0 mr-2">{index + 1 + "."}</p>
                                                <h3 className="m-0">{data.categoryName}</h3>
                                            </div>
                                            <div className="input-fields-container">
                                                {
                                                    data?.subItems.map((input, index) => {
                                                        return (
                                                            <>
                                                                <div className="input-fields">
                                                                    <p className="m-0">{index + 1 + "."}</p>
                                                                    <div style={{ marginLeft: '10px', display: "flex", justifyContent: "center", alignItems: "center" }} key={index}>
                                                                        <input type="checkbox"
                                                                            id={input.id}
                                                                            name="checkbox"
                                                                            defaultChecked={input.selected}
                                                                            htmlFor="checkbox"
                                                                            value={input.id}
                                                                        />
                                                                        <label id={index} className="m-0">{input.name}</label>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                })
                            }
                            <div className="d-flex" style={{ justifyContent: "center" }}><button className="btn-primary submit-button" onClick={handleSubmit}>Submit details</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestPage2;