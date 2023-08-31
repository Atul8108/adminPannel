import React, { useEffect, useState } from 'react'
import "./ViewBlog.css"
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Link } from 'react-router-dom'

const ViewBlog = () => {
  const [bloglist, setbloglist] = useState([]);
  console.log(bloglist)
  useEffect(() => {
    setbloglist(JSON.parse(localStorage.getItem("blogList")))
  }, []);

   function deletePost(index) {
    let newArr = bloglist.filter((card, currindex) => currindex !== index)
    setbloglist(newArr);
    localStorage.setItem('blogList', JSON.stringify(newArr))
    toast("Your Blog is Delete");
  }
  return (
    <>
      <div className='Blog-post-container'>
        <LeftNav />
        <div className="container-fluid">
          <Header />
          <div className="row">
            {
              bloglist?.map((data, index) => {
                return (
                  <div className="card col-md-3 p-3">
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
                      <p>{data.createDateTime}</p>
                      <div className="button">
                        <Link to={"/blog-page/"+index}><Button  className="btn btn-sm btn-primary">Check Post</Button></Link>                      
                        <Button className="btn btn-sm btn-danger" onClick={() => deletePost(index)}>Delete Post</Button>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </>

  )
}

export default ViewBlog