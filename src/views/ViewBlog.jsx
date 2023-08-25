import React, { useEffect, useState } from 'react'
import "./ViewBlog.css"

const ViewBlog = () => {
  const [bloglist, setbloglist] = useState([])
  useEffect(() => {
    setbloglist(JSON.parse(localStorage.getItem("blogList")))
  }, [])
  return (
    <>
      {
        bloglist.map((data, index) => {
          return (
            <div className="card"
             style={{ width: '18rem', marginLeft: '50px' }}>
              <img className="card-img-top" src={data.mainImage} alt="Cardimagecap" />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className='card-text'>{data.feeds}</p>
                <a href="/" className="btn btn-primary">Check Post</a>
              </div>
            </div>
          )
        })
      }
    </>

  )
}

export default ViewBlog