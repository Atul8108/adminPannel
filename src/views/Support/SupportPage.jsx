import React, { useEffect, useState } from 'react'
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import $ from "jquery"

const SupportPage = () => {

  const [isOpen, setIsOpen] = useState(window.innerWidth >=600);
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
            <div className='d-flex error-404' style={{justifyContent:'center', alignItems:'center'}}>
              <img  src='https://cdn.dribbble.com/userupload/8726278/file/original-ab1bde6f9c74de5c8961f7fe84990cd4.gif' alt='404' style={{width:'100%'}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// const filteredBlogList = bloglist.filter((blog) => blog.status === e);
// setbloglist(filteredBlogList);
// setCurrentPost(filteredBlogList.slice(firstPostIndex, lastPostIndex));
export default SupportPage