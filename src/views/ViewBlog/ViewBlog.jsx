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
import Pagination from '../../components/Pagination/Pagination'

const ViewBlog = () => {
  const [bloglist, setbloglist] = useState([]);
  const [value, setValue] = useState(null);
  const [CategoryValue, setCategoryValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4)

  useEffect(() => {
    setbloglist(JSON.parse(localStorage.getItem("blogList")).reverse())
  }, []);

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPost = bloglist?.slice(firstPostIndex, lastPostIndex)

  function deletePost(index) {
    let newArr = bloglist.filter((card, currindex) => currindex !== index)
    setbloglist(newArr);
    localStorage.setItem('blogList', JSON.stringify(newArr))
    toast("Your Blog is Delete");
  }

  function handleSelect(e) {
    setCurrentPage(1);
    setValue(e)
    if (e === 'ALL') {
      setbloglist(JSON.parse(localStorage.getItem("blogList")).reverse());
    }
    else {
      setbloglist(JSON.parse(localStorage.getItem("blogList")).filter((blog) => blog?.status == e));
    }
  }

  function handleSelectCategory(e) {
    setCurrentPage(1);
    setCategoryValue(e);
    if (e === "ALL") {
      setbloglist(JSON.parse(localStorage.getItem("blogList")).reverse());
    }
    else {
      setbloglist(JSON.parse(localStorage.getItem("blogList")).filter((blog) => blog?.dropdownValue == e))
    }
  }

  function search(){
    let searchValue = document.getElementById("searchInput").value
    setbloglist(JSON.parse(localStorage.getItem("blogList")).filter((blog) => blog?.title == searchValue))
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
            <div className='d-flex' style={{ gap: "20px", margin: '10px' }}>
              <div className="searchBox"  >
                <input className="searchInput" type="text" name="" placeholder="Enter Blog Title" id='searchInput' />
                <button className="searchButton" href="#" style={{height:"44px"}} onClick={() => {search()}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <g clip-path="url(#clip0_2_17)">
                      <g filter="url(#filter0_d_2_17)">
                        <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                      </g>
                    </g>
                    <defs>
                      <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                      </filter>
                      <clipPath id="clip0_2_17">
                        <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
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
              <DropdownButton
                alignright="true"
                title={CategoryValue ?? "NEWS"}
                id="dropdown-menu-align-left"
                onSelect={(e) => { handleSelectCategory(e) }}
              >
                <Dropdown.Item id="dropdown-menu-align-left" eventKey="ALL">All</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-align-left" eventKey="News">News</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-align-left" eventKey="Feeds">Feeds</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-align-left" eventKey="Headline">HeadLine</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="container-fluid">

              <div className="row mx-0 gx-0">
                {currentPost?.length > 0 ?
                  currentPost?.map((data, index) => {
                    return (
                      <div className="col-md-3 p-3">
                        <div className="shadow blog-card">
                          <Link to={"/blog-page"} state={data} style={{ textDecoration: "none", color: 'black' }}>
                            <img className="card-img-top shadow-sm" src={data?.mainImage} alt="Cardimagecap" />
                            <div className="text-body" >
                              <div className="title-and-status">
                                <h5 className="title">{data?.title}</h5>
                                <p className={`${data?.status == "PUBLISH" ? "published" : "draft"}`}>{data?.status}</p>
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
                            <Link className='w-100' to={"/edit-page"} state={data}><Button className="btn btn-sm btn-info w-100">Edit</Button></Link>
                            {/* <Button className="btn btn-sm btn-danger" onClick={() => deletePost(index)}>Delete Post</Button> */}
                            <DeleteBtn deletefunction={() => { deletePost(index) }} />

                          </div>
                        </div>
                      </div>
                    )
                  })
                  : <div><p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red' }}>No data found</p></div>
                }
              </div>
              <Pagination totalPost={bloglist?.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ViewBlog