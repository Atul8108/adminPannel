import React, { useEffect, useState } from 'react'
import "./ViewBlog.css"

const ViewBlog = () => {
  const [bloglist, setbloglist] = useState([])
  useEffect(() => {
    setbloglist(JSON.parse(localStorage.getItem("blogList")))
  }, [])
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          {
            bloglist.map((data, index) => {
              return (
                <div className="card col-md-2 m-3">
                  <img className="card-img-top" src={data.mainImage} alt="Cardimagecap" />
                  <div className="card-body">
                    <h5 className="card-title">Title: {data.title}</h5>
                    <p className="card-description">Description: {data.description}</p>
                    <div className="keyword-container">
                      {
                      data?.key?.map((item,index) =>{
                        return(
                          <p className='keyword'>{item.text}</p>
                        )
                      })
                    }
                    </div>
                    
                    <p className='About'>About: {new DOMParser().parseFromString(data.editor,'text/xml').firstChild.innerHTML}</p>
                    <p className='card-feeds'>Category: {data.dropdownValue}</p>
                    <a href="/" className="btn btn-primary">Check Post</a>
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </div>

    </>

  )
}

export default ViewBlog