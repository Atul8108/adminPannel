import $ from "jquery";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import "./TestModal.css"

const TestPage2 = () => {
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
        }, {
            categoryId: 2,
            categoryName: "Event",
            name: "Wedding",
            selected: false
        }, {
            categoryId: 3,
            categoryName: "Lights",
            name: "Red Lights",
            selected: true

        }, {
            categoryId: 1,
            categoryName: "Game",
            name: "Football",
            selected: true
        }, {
            categoryId: 5,
            categoryName: "Drinks",
            name: "Smoothy",
            selected: false
        }, {
            categoryId: 4,
            categoryName: "Food",
            name: "Rice",
            selected: true
        }, {
            categoryId: 1,
            categoryName: "Game",
            name: "BaseBall",
            selected: false
        }, {
            categoryId: 3,
            categoryName: "Lights",
            name: "Green Lights"
        }, {
            categoryId: 2,
            categoryName: "Game",
            name: "Annual Meeting",
            selected: true
        }, {
            categoryId: 5,
            categoryName: "Drinks",
            name: "Package Water",
            selected: false
        }, {
            categoryId: 1,
            categoryName: "Game",
            name: "Hockey",
            selected: false
        },
    ]
    const groupedItems = item.reduce((groupedItems, item) => {

        const { categoryId, categoryName, name, selected } = item;
        if (!groupedItems[categoryId]) {
            groupedItems[categoryId] = {
                categoryId,
                categoryName,
                name: [],
                selected
            };
        }
        groupedItems[categoryId].name.push(item);
        return Object.values(groupedItems);
    }, {});
    function handleSubmit() {
        let checkboxValue = document.querySelectorAll('input[name="checkbox"]:checked')
        for (let i = 0; i < checkboxValue.length; i++) {
            if (checkboxValue[i].checked) {
                console.log(checkboxValue[i].value);
            }
        }
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
                                groupedItems?.map((data, index) => {
                                    return (
                                        <>
                                            <div className="serialNo-heading">
                                                <p className="m-0 mr-2">{index + 1 + "."}</p>
                                                <h3 className="m-0">{data.categoryName}</h3>

                                            </div>
                                            <div className="input-fields-container">
                                                {
                                                    data?.name.map((input, index) => {
                                                        return (
                                                            <>
                                                                <div className="input-fields">
                                                                    <p className="m-0">{index + 1 + "."}</p>
                                                                    <div style={{marginLeft:'10px',display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                                        <input type="checkbox"
                                                                            id={index}
                                                                            name="checkbox"
                                                                            defaultChecked={input.selected}
                                                                            htmlFor="checkbox"
                                                                            value={input.name} />
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
                            <div className="d-flex" style={{justifyContent:"center"}}><button className="btn-primary submit-button" onClick={handleSubmit}>Submit details</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestPage2;