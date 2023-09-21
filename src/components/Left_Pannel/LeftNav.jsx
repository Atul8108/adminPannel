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
import { USERINFO } from '../../api/locaStorage.data';

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
    navigate("/", { replace: true })
  };


  return (
    <>
      <div className={`leftnav ${isOpen ? "open" : "close"}`}>
        <h4 className='Admin_panel'>Admin Panel</h4>
        <div className="Admin">
          
         <img className="profile_image"
              onError={({currentTarget}) => {
                currentTarget.onerror = null;
                currentTarget.src = "https://uam-cdn.nextlevel.app/company/4335afcd-f776-4423-9d7b-4f30ae4033f7?6y7HZIZhQxws1dvJBZWcj0s6NYdlfUsV";
              }}
              src={JSON.parse(USERINFO())?.profileImg}
              alt="Profile_Image"
            /> 

          {/* <ProfileImage/> */}
          <div className="admin_online">
            {
              <div style={{ color: 'white' }}><p className='mb-0'>{(JSON.parse(USERINFO())?.userName) == "" ? "Admin" : JSON.parse(USERINFO())?.userName}</p>
                <p className='m-0' style={{ fontSize: "small" }}>
                  <span className="text-success">●</span> Online
                </p></div>
            }

          </div>
        </div>
        <div className="List d-flex flex-column">
          <NavLink to="/Dashbord" className="nav_item"><AiFillHome />&nbsp;Home</NavLink>
          <Accordion defaultActiveKey={['1']} alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header><ImBlog />&emsp;Blog</Accordion.Header>
              <Accordion.Body >
                <NavLink to='/create-blog' eventKey="link-4" className='nav_item' style={{ paddingLeft: '45px' }}>Create Blog</NavLink>
                <NavLink to='/view-blog' eventKey="link-3" className='nav_item' style={{ paddingLeft: '45px' }}>View Blog</NavLink>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <NavLink to="/support-page" eventKey="link-7" className='nav_item'><BiSupport />&emsp;Support</NavLink>
          <NavLink to="/test-page" eventKey="link-8" className='nav_item'><TbPageBreak />&emsp;Test Page</NavLink>
          <button className="nav_item" onClick={logout} style={{ backgroundColor: '#DA2F4C', border: 'none', width: '100%', alignItems: 'center', paddingLeft: '12px' }}><LuLogOut />&emsp;LogOut</button>
        </div>
      </div>
    </>
  )
}

export default LeftNav
