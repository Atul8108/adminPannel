import React, { useEffect, useState } from 'react'
import "./LeftNav.css";
import "../../../src/index.css";
import { Accordion } from "react-bootstrap";
import { AiFillHome } from 'react-icons/ai'
import { ImBlog } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'
import { TbPageBreak } from 'react-icons/tb'
import $ from "jquery"
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])
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
          <nav defaultActiveKey="/home" className="flex-column" style={{ marginBottom: '20px' }}>
            <NavLink to="/home-page" style={{ display: 'flex', textDecoration: "none", color: 'white', alignItems: 'center', padding: '10px ' }}><AiFillHome />&emsp;Home</NavLink>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header><ImBlog />&emsp;Blog</Accordion.Header>
                <Accordion.Body >
                  <NavLink to='/view-blog' eventKey="link-3" className='nav_item'>View Blog</NavLink>
                  <NavLink to='/home' eventKey="link-4" className='nav_item'>Create Blog</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <NavLink to="/support-page" eventKey="link-7" className='nav_Support' style={{ display: 'flex', textDecoration: "none", color: 'white', alignItems: 'center',padding: '10px' }}><BiSupport />&emsp;Support</NavLink>
            <NavLink to="/test-page" eventKey="link-8" className='nav_Support' style={{ display: 'flex', textDecoration: "none", color: 'white', alignItems: 'center', padding: '10px' }}><TbPageBreak />&emsp;Test Page</NavLink>
          </nav>
        </div>
      </div>
    </>
  )
}

export default LeftNav
