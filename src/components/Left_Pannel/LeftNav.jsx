import React, { useEffect, useState } from 'react'
import "./LeftNav.css";
import "../../../src/index.css";
import { Accordion } from "react-bootstrap";
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineForum } from 'react-icons/md'
import { ImBlog } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa';
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
              <span>●</span> Online
            </p>
          </div>
        </div>
        <div className="List ">
          <nav defaultActiveKey="/home" className="flex-column" style={{ marginBottom: '20px' }}>
            <NavLink to="/home-page" style={{ display:'block', textDecoration: "none", color: 'white' , marginLeft: '5px', height:'45px'}}>&emsp;<AiFillHome />&emsp;Home</NavLink>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><MdOutlineForum />&emsp;Forum</Accordion.Header>
                <Accordion.Body>
                  <NavLink to="/" eventKey="link-1" className='nav_item '>Blog</NavLink>
                  <NavLink to="/" eventKey="link-2" className='nav_item '>Support</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header ><ImBlog/>&emsp;Blog</Accordion.Header>
                <Accordion.Body >
                  <NavLink to='/view-blog' eventKey="link-3" className='nav_item'>View Blog</NavLink>
                  <NavLink to='/home' eventKey="link-4" className='nav_item'>Create Blog</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <NavLink to="/" eventKey="link-7" className='nav_Support'><BiSupport/>&emsp;Support</NavLink>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header><FaUserFriends/>&emsp;User</Accordion.Header>
                <Accordion.Body>
                  <NavLink to="/" eventKey="link-5" className='nav_item'>Blog</NavLink>
                  <NavLink  to="/" eventKey="link-6" className='nav_item'>Support</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </nav>
        </div>
      </div>
    </>
  )
}

export default LeftNav
