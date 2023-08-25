import React, { useState } from 'react'
import "./ViewBlog.css"

const ViewBlog = () => {
  const [info, setinfo] = useState([])
  console.log(JSON.parse(localStorage.getItem("blogList")));
  return (
    <div className="card" style={{ width: '18rem' , marginLeft:'50px' }}>
        <img className="card-img-top" src="https://play-lh.googleusercontent.com/4iYfabsphrq4CE-37nGVAUI1cFFYQl5qm5nyJ7EENlgI1WHLmAGJznvFQQO-dHlV6O8=w526-h296-rw" alt="Cardimagecap" />
      <div className="card-body">
        <h5 className="card-title">title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p className='card-text'>KeyWord</p>
        <a href="/" className="btn btn-primary">Check Post</a>
      </div>
    </div>
  )
}

export default ViewBlog