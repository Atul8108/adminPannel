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


    let item = [
        {
            categoryId: 1,
            categoryName: "Game",
            name: "Cricket"
        }, {
            categoryId: 2,
            categoryName: "Event",
            name: "Wedding"
        }, {
            categoryId: 3,
            categoryName: "Lights",
            name: "Red Lights"
        }, {
            categoryId: 1,
            categoryName: "Game",
            name: "Football"
        }, {
            categoryId: 5,
            categoryName: "Drinks",
            name: "Smoothy"
        }, {
            categoryId: 4,
            categoryName: "Food",
            name: "Rice"
        }, {
            categoryId: 1,
            categoryName: "Game",
            name: "BaseBall"
        }, {
            categoryId: 3,
            categoryName: "Lights",
            name: "Green Lights"
        }, {
            categoryId: 2,
            categoryName: "Game",
            name: "Annual Meeting"
        }, {
            categoryId: 5,
            categoryName: "Drinks",
            name: "Package Water"
        }, {
            categoryId: 1,
            categoryName: "Game",
            name: "Hockey"
        },
    ]
    const groupedItems = item.reduce((groupedItems, item) => {
        const { categoryId, categoryName, name } = item;
        if (!groupedItems[categoryId]) {
            groupedItems[categoryId] = {
                categoryId,
                categoryName,
                name: [],
            };
        }
        groupedItems[categoryId].name.push(name);
        return groupedItems;
    }, []);
    const names = Array.from(item.name);
    console.log(names)
    console.log(groupedItems);
    return (
        <>
            <div className="w-100 main d-flex global-layout">
                <LeftNav />
                <div
                    className={`main-content  ${isOpen ? "openRightNav" : "closeRightNav"
                        }`}
                >
                    <Header />
                    <div className="mt-5">
                        <div style={{ display: "flex", flexDirection: "column", color: "white", alignItems: 'center', gap: "10px", margin: '20px' }}>

                            {
                                groupedItems.map((data, index) => {
                                    console.log(data)
                                    return (
                                        <>
                                            <p className="m-0">{data.categoryId}</p>
                                            <h4 className="m-0">{data.categoryName}</h4>
                                            <p>{data.name}</p>
                                            {
                                                groupedItems?.name.map((item, index) => {
                                                    return (
                                                        <input type="checkbox" value={item} />

                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestPage2;