import React, { useEffect, useState } from 'react'
import "./ViewBlog.css"
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Link } from 'react-router-dom'
import $ from "jquery"
import DeleteBtn from '../../components/DeletePost-btn/DeleteBtn'

const ViewBlog = () => {
  const [bloglist, setbloglist] = useState([]);
  let [value, setValue] = useState(null);


  useEffect(() => {
    setbloglist(JSON.parse(localStorage.getItem("blogList")))
  }, []);

  function deletePost(index) {
    let newArr = bloglist.filter((card, currindex) => currindex !== index)
    setbloglist(newArr);
    localStorage.setItem('blogList', JSON.stringify(newArr))
    toast("Your Blog is Delete");

  }

  function handleSelect(e) {
    setValue(e)
    if (e === 'ALL') {
      setbloglist(JSON.parse(localStorage.getItem("blogList")));
    }
    else {
      setbloglist(JSON.parse(localStorage.getItem("blogList")).filter((blog) => blog.status === e));
    }

  }
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])
  return (
    <>
      <div className='w-100 main d-flex global-layout'>
        <LeftNav />
        <div className={`main-content ${isOpen ? "openRightNav" : "closeRightNav"}`}>
          <Header />
          <div className={`RightNav`}>
            <DropdownButton
              alignright="true"
              title={value ?? "Publish"}
              id="dropdown-menu-align-left"
              onSelect={(e) => { handleSelect(e) }}
            >
              <Dropdown.Item id="dropdown-menu-align-left" eventKey="ALL">All</Dropdown.Item>
              <Dropdown.Item id="dropdown-menu-align-left" eventKey="PUBLISH">Publish</Dropdown.Item>
              <Dropdown.Item id="dropdown-menu-align-left" eventKey="DRAFT">Draft</Dropdown.Item>
            </DropdownButton>
            <div className="container-fluid">
            <div className="row mx-0 gx-0">
              {bloglist?.length > 0 ?
                bloglist?.map((data, index) => {
                  return (
                    <div className="col-md-3 p-3">
                      <div className="shadow blog-card">
                        <Link to={'/blog-page/' + index} style={{ textDecoration: "none", color: 'black' }}>
                          <img className="card-img-top shadow-sm" src={data?.mainImage} alt="Cardimagecap" />
                          <div className="text-body" >
                          <div className="title-and-status">
                            <h5 className="title">{data?.title}</h5>
                          <p className={`${data.status == "PUBLISH"?"published":"draft"}`}>{data?.status}</p>
                          </div>
                            <p className='author-by' >By - <span className='author'> {data?.userName}</span></p>
                            <p className='date-time'>{data?.createDateTime}</p>
                            <p className="description">{data?.description}</p>
                            <div className="keyword-container">
                              {
                                data?.key?.slice(0, 5).map((item, index) => {
                                  return (
                                    <p className='keyword shadow-sm'>{item?.text}</p>
                                  )
                                })
                              }
                            </div>
                            <p className='card-feeds'> In {data?.dropdownValue} Category</p>
                          </div>
                        </Link>
                        <div className="button">
                          {/* <Link to={"/blog-page/" + index}><Button className="btn btn-sm btn-primary">view Post</Button></Link> */}
                          <Link className='w-100' to={"/edit-page/" + index}><Button className="btn btn-sm btn-info w-100">Edit</Button></Link>
                          {/* <Button className="btn btn-sm btn-danger" onClick={() => deletePost(index)}>Delete Post</Button> */}
                          <DeleteBtn deletefunction={() => { deletePost(index) }} />
                          
                        </div>
                      </div>
                    </div>
                  )
                })
                : <div><p style={{ marginLeft: "50%", color: 'red' }}>No data found</p></div>
              }
            </div></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ViewBlog