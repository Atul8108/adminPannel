import React, { useEffect, useState } from 'react'
import "./LeftNav.css";
import "../../../src/index.css";
import { Accordion, Nav } from "react-bootstrap";
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineForum } from 'react-icons/md'
import { ImBlog } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa';
import $ from "jquery"
import { Link } from 'react-router-dom';


const LeftNav = () => {

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])

  $(function () {
    $(".Link").on({
      click: function () {
        $(".Link").removeClass("Link2")
        $(this).addClass("Link2");
      }
    });
  });
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
          <Nav defaultActiveKey="/home" className="flex-column" style={{ marginBottom: '20px' }}>
            <Link to="/home-page" className="Link" style={{ textDecoration: "none", color: 'white' , marginLeft: '5px' }}>&emsp;<AiFillHome />&emsp;Home</Link>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><MdOutlineForum />&emsp;Forum</Accordion.Header>
                <Accordion.Body>
                  <Link eventKey="link-1" className='nav_item Link'>Blog</Link>
                  <Link eventKey="link-2" className='nav_item Link'>Support</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header ><ImBlog/>&emsp;Blog</Accordion.Header>
                <Accordion.Body >
                  <Link to='/view-blog' eventKey="link-3" className='nav_item Link'>View Blog</Link>
                  <Link to='/home' eventKey="link-4" className='nav_item Link'>Create Blog</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Link eventKey="link-7" className='nav_Support Link'><BiSupport/>&emsp;Support</Link>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header><FaUserFriends/>&emsp;User</Accordion.Header>
                <Accordion.Body>
                  <Link eventKey="link-5" className='nav_item Link'>Blog</Link>
                  <Link eventKey="link-6" className='nav_item Link'>Support</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Nav>
        </div>
      </div>
    </>
  )
}

export default LeftNav
