import React from 'react'
import LeftNav from '../Left_Pannel/LeftNav'
import Header from '../Header/Header'
import './HomePage.css'

const HomePage = () => {
    let view = JSON.parse(localStorage.getItem("blogList"))
    console.log(view)
    let totalComments = 0;
    let totalPublish = 0;
    let totalDraft = 0;
    for (const item of view) {
        totalComments = totalComments + item.comments.length
        if (item.status === 'DRAFT') {
            totalDraft = totalDraft + 1
        }
        else {
            totalPublish = totalPublish + 1
        }
    }
    return (
        <>
            <div className="main d-flex">
                <LeftNav />
                <div className='container-fluid  '>
                    <Header />
                    <div className="row ml-4 mt-4 " style={{backgroundColor: '#FBFBFC'}}>
                        <div className='total_post'>
                            <p className='post'>Total Number of Post:</p>
                            <p className='item'>{view.length}</p>
                        </div>
                        <div className='total_post'>
                            <p className='post'>Total Number of comments:</p>
                            <p className='item'>{totalComments}</p>
                        </div>
                        <div className='total_post'>
                            <p className='post'>Total PUBLISH:</p>
                            <p className='item'>{totalPublish}</p>
                        </div>
                        <div className='total_post'>
                            <p className='post'>Total Draft:</p>
                            <p className='item'>{totalDraft}</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomePage