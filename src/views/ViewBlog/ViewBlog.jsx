import React, { useEffect, useState } from 'react'
import "./ViewBlog.css"
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Link } from 'react-router-dom'
import $ from "jquery"

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

  function  handleSelect (e){
    setValue(e)
    if(e === 'ALL'){
      setbloglist(JSON.parse(localStorage.getItem("blogList")));
    }
    else{
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
        <div className="container-fluid">
          <Header />
          <div className={`RightNav ${isOpen ? "openRightNav" : "closeRightNav"}`}>
          <DropdownButton
                  alignright="true"
                  title={value ?? "Publish"}
                  id="dropdown-menu-align-left"
                  onSelect={(e)=>{handleSelect(e)}}
                >
                  <Dropdown.Item id="dropdown-menu-align-left" eventKey="ALL">All</Dropdown.Item>
                  <Dropdown.Item id="dropdown-menu-align-left" eventKey="PUBLISH">Publish</Dropdown.Item>
                  <Dropdown.Item id="dropdown-menu-align-left" eventKey="DRAFT">Draft</Dropdown.Item>
                </DropdownButton>
          <div className="row">
            { bloglist?.length>0 &&
              bloglist?.map((data, index) => {
                return (
                  <div className="card col-md-3 p-3 m-4">
                  <Link to={'/blog-page/' + index} style={{textDecoration:"none",color:'none'}}>
                    <img className="card-img-top" src={data.mainImage} alt="Cardimagecap" />
                    <div className="card-body">
                      <h5 className="card-title">Title: {data.title}</h5>
                      <p className="card-description">Description: {data.description}</p>
                      <div className="keyword-container">
                        {
                          data?.key?.map((item, index) => {
                            return (
                              <p className='keyword'>{item.text}</p>
                            )
                          })
                        }
                      </div>
                      <p className='card-feeds'>Category: {data.dropdownValue}</p>
                      <p>{data?.status}</p>
                      <p>{data.createDateTime}</p>
                    </div>
                    </Link>
                      <div className="button">
                        <Link to={"/blog-page/"+index}><Button className="btn btn-sm btn-primary">view Post</Button></Link>
                        <Link to={"/edit-page/"+index}><Button  className="btn btn-sm btn-primary">Edit Post</Button></Link>                       
                        <Button className="btn btn-sm btn-danger" onClick={() => deletePost(index)}>Delete Post</Button>
                        <ToastContainer />
                      </div>
                  </div>
                )
              })
            }
          </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ViewBlog