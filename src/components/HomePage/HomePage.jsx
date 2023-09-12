import React from 'react'
import LeftNav from '../Left_Pannel/LeftNav'
import Header from '../Header/Header'
import './HomePage.css'
import $ from "jquery"
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PiGlobeStandFill } from 'react-icons/pi'

const HomePage = () => {
    let view = JSON.parse(localStorage.getItem("blogList"))
    console.log(view)
    let totalComments = 0;
    let totalPublish = 0;
    let totalDraft = 0;
    for (const item of view) {
        totalComments = totalComments + item?.comments?.length
        if (item.status === 'DRAFT') {
            totalDraft = totalDraft + 1
        }
        else {
            totalPublish = totalPublish + 1
        }

    }
    const element = view.slice(0, 5);
    console.log(element)
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        $(".navbar-toggler").click(() => {
            setIsOpen(!isOpen);
        })
    }, [isOpen])
    return (
        <>
            <div className="w-100 main d-flex global-layout">
                <LeftNav />
                <div className="main-content">
                    <Header />
                    <div className={`RightNav ${isOpen ? "openRightNav" : "closeRightNav"}`}>
                        <div className='container-fluid'>
                            <div className="row " style={{ padding: '30px', display: 'flex', justifyContent: 'space-between' }}>
                                <div className='col'>
                                    <div className="total_post">
                                        <p className='post'>Total Number of Post:</p>
                                        <p className='item'>{view?.length}</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="total_post">
                                        <p className='post'>Total Number of comments:</p>
                                        <p className='item'>{totalComments}</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="total_post">
                                        <p className='post'>Total PUBLISH:</p>
                                        <p className='item'>{totalPublish}</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="total_post">
                                        <p className='post'>Total Draft:</p>
                                        <p className='item'>{totalDraft}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='heading'>
                            <h1 className='Top_post'><PiGlobeStandFill />Todays First Five Blog (<span>{new Date().toLocaleString()}</span>)</h1>
                            <p></p>
                        </div>
                        <div className='Table'>
                            <table style={{ border: '1px solid black' }}>

                                <tr >
                                    <th>S.no</th>
                                    <th>Post Name</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>keyword</th>
                                    <th>Tag</th>
                                    <th>View Blog</th>
                                </tr>
                                {
                                    element.map((data, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{data.title}</td>
                                                <td>{data.createDateTime}</td>
                                                <td><img style={{ width: '50px' }} src={data.image} alt='' /></td>
                                                <td>{data.description}</td>
                                                <td>
                                                    {
                                                        data?.key?.map((keywords, index) => {
                                                            return (
                                                                <td><p>{keywords.text}</p></td>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td>{data.tag}</td>
                                                <td><Link to={"/blog-page/" + index}><Button className="btn btn-sm btn-primary">view Post</Button></Link></td>
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