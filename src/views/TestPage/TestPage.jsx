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

          </div>
        </div>
      </div>
    </>
  )
}

export default TestPage