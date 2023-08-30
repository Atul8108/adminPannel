import React, { useRef, useState } from "react";
import "./BlogPage.css";
import { useParams } from "react-router-dom";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import Header from "../../components/Header/Header";

const BlogPage = () => {
  let { id } = useParams();
  const blog = useRef();
  let singleBlog = useRef();
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  blog.current = JSON.parse(localStorage.getItem("blogList"));
  singleBlog.current = blog.current[id];

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new comment object
    const newComment = {
      userName,
      comment,
    };

    // Add the new comment to the list of comments
    setCommentsList([...commentsList, newComment]);

    // Clear the input fields
    setUserName("");
    setComment("");
  };

  return (
    <>
      <div className="Container">
        <LeftNav />
        <div className="blog-page">
          <Header />
          <div className="inner-container">
            <h1 className="title">{singleBlog?.current?.title}</h1>
            <p>{singleBlog.current?.dropdownValue}</p>
            <div className="image">
              <img
                className="MainImage"
                src={singleBlog.current?.mainImage}
                alt="MainImage"
              />
              <p className="Description">{singleBlog?.current?.description}</p>
              <p>
                {
                  new DOMParser().parseFromString(
                    singleBlog?.current?.editor,
                    "text/xml"
                  ).firstChild.innerHTML
                }
              </p>
              <img
                className="additionalImage"
                src={singleBlog?.current?.image}
                alt=""
              />
            </div>
            <div className="comment-box">
              <label>User Name</label>
              <input
                className="user-name"
                placeholder="User name"
                value={userName}
                onChange={handleUserNameChange}
              />
              <label>Comment</label>
              <textarea
                className="form-control"
                rows="2"
                value={comment}
                onChange={handleCommentChange}
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>

              {commentsList != null && (
                <div>
                  <h2>Comments</h2>
                  <ul>
                    {commentsList.map((c, index) => (
                      <li key={index}>
                        <strong>{c.userName}:</strong> {c.comment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
