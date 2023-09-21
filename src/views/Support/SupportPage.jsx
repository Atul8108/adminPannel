import React, { useEffect, useState } from 'react'
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import $ from "jquery"

const SupportPage = () => {

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

          <p>Support Page</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportPage