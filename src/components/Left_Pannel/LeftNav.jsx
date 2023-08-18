import React from 'react'
import "./LeftNav.css";
import "../../../src/index.css";
import { Accordion, Button, Card, Nav } from "react-bootstrap";
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineForum} from 'react-icons/md'
import {ImBlog} from 'react-icons/im'
import {BiSupport} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'


const LeftNav = () => {
  return (
    <>
      <div className="leftnav">
        <h4>Admin Panel</h4>
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
        <div className="List">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" style={{}}><AiFillHome/>&emsp;Home</Nav.Link>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><MdOutlineForum/>&emsp;Forum</Accordion.Header>
                <Accordion.Body>
                <Nav.Link eventKey="link-2">Blog</Nav.Link>
                <Nav.Link eventKey="link-2">Support</Nav.Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><ImBlog/>&emsp;Blog</Accordion.Header>
                <Accordion.Body>
                <Nav.Link eventKey="link-2">Blog</Nav.Link>
                <Nav.Link eventKey="link-2">Support</Nav.Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Nav.Link eventKey="link-2"><BiSupport/>&emsp;Support</Nav.Link>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><FaUserFriends/>&emsp;User</Accordion.Header>
                <Accordion.Body>
                <Nav.Link eventKey="link-2">Blog</Nav.Link>
                <Nav.Link eventKey="link-2">Support</Nav.Link>
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