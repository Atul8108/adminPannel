import React, { useEffect, useState } from 'react'
import "./LeftNav.css";
import "../../../src/index.css";
import { Accordion } from "react-bootstrap";
import { AiFillHome } from 'react-icons/ai'
import { ImBlog } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'
import { TbPageBreak } from 'react-icons/tb'
import { LuLogOut } from 'react-icons/lu'
import $ from "jquery"
import { NavLink, useNavigate } from 'react-router-dom';

const LeftNav = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])


  const logout = () => {
    localStorage.setItem('LogInNumber', "NODATA");
    localStorage.setItem('LogInPassword', "NODATA");
    navigate("/",{replace:true})
  };

  return (
    <>
      <div className={`leftnav ${isOpen ? "open" : "close"}`}>
        <h4 className='Admin_panel'>Admin Panel</h4>
        <div className="Admin">
          <img
            className="profile_image"
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt="Profile_Image"
          />
          <div className="admin_online">
            <p>Admin</p>
            <p>
              ● Online
            </p>
          </div>
        </div>
        <div className="List ">
          <nav defaultActiveKey="/create-blog" className="flex-column" style={{ marginBottom: '20px' }}>
            <NavLink to="/Dashbord" className="List-styling"><AiFillHome />&emsp;Home</NavLink>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header><ImBlog />&emsp;Blog</Accordion.Header>
                <Accordion.Body >
                  <NavLink to='/create-blog' eventKey="link-4" className='nav_item'>Create Blog</NavLink>
                  <NavLink to='/view-blog' eventKey="link-3" className='nav_item'>View Blog</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <NavLink to="/support-page" eventKey="link-7" className='nav_Support List-styling'><BiSupport />&emsp;Support</NavLink>
            <NavLink to="/test-page" eventKey="link-8" className='nav_Support List-styling'><TbPageBreak />&emsp;Test Page</NavLink>
            <button className="nav_Support List-styling" onClick={logout} style={{backgroundColor:'red', border:'none',width:'100%' , alignItems:'center',paddingLeft:'12px'}}><LuLogOut />&emsp;LogOut</button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default LeftNav
