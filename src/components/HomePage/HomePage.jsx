import $ from "jquery"
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { PiGlobeStandFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import LeftNav from '../Left_Pannel/LeftNav'
import './HomePage.css'

const HomePage = () => {
    let view = JSON.parse(localStorage.getItem("blogList"));
    console.log(view);
    let totalComments = 0;
    let totalPublish = 0;
    let totalDraft = 0;
    if (view?.length > 0) {
        for (const item of view) {
            if (item?.comments) {
                totalComments = totalComments + item?.comments?.length
            }
            if (item?.status === 'DRAFT') {
                totalDraft = totalDraft + 1
            }
            else {
                totalPublish = totalPublish + 1
            }
        }
    }
    let element = [];
    element = view?.slice(0, 5);
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        $(".navbar-toggler").click(() => {
            setIsOpen(!isOpen);
        })
    }, [isOpen])
    console.log(element?.length)
    return (
        <>
            <div className="w-100 main d-flex global-layout">
                <LeftNav />
                <div className={`main-content ${isOpen ? "openRightNav" : "closeRightNav"}`}>
                    <Header />
                    <div className={`RightNav`}>
                        <div className='container-fluid' style={{ backgroundColor: "var(--total-card)", padding: '10px' }}>
                            <div className="row" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                <div className='col-sm-3 col-6 '>
                                    <div className="total_post">
                                        <p className='post'>Total Post:</p>
                                        {
                                            view?.length > 0 ? <p className='item mt-4'>{view?.length}</p> : <p className='item mt-4'>0</p>
                                        }
                                    </div>
                                </div>
                                <div className='col-sm-3 col-6 '>
                                    <div className="total_post">
                                        <p className='post'>Total comments:</p>
                                        {/* {
                                            totalComments=== 0 ? <p className='item'>{totalComments}</p>: <p className='item'>0</p>
                                        } */}
                                        <p className='item'>{totalComments}</p>
                                    </div>
                                </div>
                                <div className='col-sm-3 col-6 '>
                                    <div className="total_post">
                                        <p className='post'>Total PUBLISH:</p>
                                        <p className='item mt-4'>{totalPublish}</p>
                                    </div>
                                </div>
                                <div className='col-sm-3 col-6 '>
                                    <div className="total_post">
                                        <p className='post'>Total Draft:</p>
                                        <p className='item mt-4'>{totalDraft}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='heading'>
                            <h1 className='Top_post'><PiGlobeStandFill />Todays First Five Blog (<span>{new Date().toLocaleString()}</span>)</h1>
                            <p></p>
                        </div>


                        <div className='table mb-5'>
                            <table style={{ border: '13px solid #bfbaba', maxWidth: "70vw" }}>
                                <tr >
                                    <th>S.no</th>
                                    <th>Post Name</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>keyword</th>
                                    <th>Tag</th>
                                    <th>Author Name</th>
                                    <th >View Blog</th>
                                </tr>

                                {element?.length < 0 ? <tr><td colspan='9' style={{ color: 'red', textAlign: 'center' }}>No data found</td></tr> :
                                    element?.map((data, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><p className='table-description mb-0'>{data.title}</p></td>
                                                <td>{data.createDateTime}</td>
                                                <td><img className='mainImage' style={{ width: '50px' }} src={data.mainImage} alt='' onClick={() => window.open(data.mainImage, "_blank")} /></td>
                                                <td>
                                                    <p className='table-description mb-0'>
                                                        {data.description}</p></td>
                                                <td>
                                                    <p>
                                                        {
                                                            data?.key?.slice(0, 5).map((keywords, index) => {
                                                                return (
                                                                    <td><p className='m-0'>{keywords.text}</p></td>
                                                                )
                                                            })
                                                        }
                                                    </p>

                                                </td>
                                                <td>
                                                    {
                                                        data.tag === '' ? <p>-----</p> : <p>{data.tag}</p>
                                                    }
                                                </td>
                                                {/* <td>{data.tag}</td> */}
                                                <td>{data.userName} {data.lastName}</td>
                                                <td><Link to={"/blog-page"} state={data} ><Button className="btn btn-sm btn-primary">view Post</Button></Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomePage