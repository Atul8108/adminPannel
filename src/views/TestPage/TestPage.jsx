import React from 'react'
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import $ from "jquery"
import { useState } from 'react'
import { useEffect } from 'react'


const TestPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])
  return (
    <>
      <div className="w-100 d-flex global-layout">
        <LeftNav />
        <div className={`main-content ${isOpen ? "openRightNav" : "closeRightNav"}`}>
          <Header />
          <div className={`RightNav`}>
            <p>Page is Down</p>
            <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center' }}>
              <img src='https://cdn.dribbble.com/users/37624/screenshots/3366123/media/55d0f554690037fa161d33eb69da68a4.jpg' alt='404' style={{ width: '900px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestPage