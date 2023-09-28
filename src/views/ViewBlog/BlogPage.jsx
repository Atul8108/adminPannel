import React, { useRef, useState } from "react";
import "./BlogPage.css";
import { Link, useLocation, useParams } from "react-router-dom";
import LeftNav from "../../components/Left_Pannel/LeftNav";
import Header from "../../components/Header/Header";
import parse from "html-react-parser";
import { BiCategory, BiPurchaseTagAlt } from "react-icons/bi";
import { BsCalendar2Date, BsPersonVcard } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import $ from "jquery";
import { BLOGLIST } from "../../api/locaStorage.data";

let allBlog = [];
let lastpost = [];
let blogDetails = {};
let commentList = [];
const BlogPage = () => {
  const { state } = useLocation();

  blogDetails = state;
  console.log(blogDetails);
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    setCommentsList(blogDetails?.commentList || []);
    allBlog = JSON.parse(BLOGLIST());
    lastpost = allBlog.slice(0, 5);
  }, []);

  function handleSubmit() {
    let newComment = {
      userName: document.getElementById("userName").value,
      comment: document.getElementById("comment").value,
    };
    commentList = [...commentsList, newComment];
    setCommentsList(commentList);

    const updatedList = allBlog.map((item, index) => {
      if (item.id == state.id) {
        blogDetails.commentList = commentList;
        return { ...item, ...blogDetails };
      } else {
        return item;
      }
    });

    localStorage.setItem("blogList", JSON.stringify(updatedList));

    document.getElementById("userName").value = null;
    document.getElementById("comment").value = null;
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);
  console.log(blogDetails);
  return (
    <>
      <div className="w-100 d-flex global-layout">
        <LeftNav />
        <div
          className={`main-content ${
            isOpen ? "openRightNav" : "closeRightNav"
          }`}
        >
          <Header />
          <div className="blog-page">
            <div className="inner-container">
              <div className="content">
                <h1 className="title">{blogDetails?.title}</h1>
                <p className="author-name">
                  <BsPersonVcard />
                  &nbsp;&nbsp;{blogDetails?.userName}
                </p>
                <div className="category-and-date">
                  <p className="category">
                    {" "}
                    <BiCategory /> {blogDetails?.dropdownValue}
                  </p>
                  <p>/</p>
                  <p>
                    <BsCalendar2Date />
                    {blogDetails?.createDateTime}
                  </p>
                </div>
                <div className="main-image">
                  <img src={blogDetails?.mainImage} alt="mainImage" />
                </div>
                <p className="description">{blogDetails?.description}</p>
                <div className="main_content">
                  <div className="editor">
                    <p>{parse(blogDetails?.editor)}</p>
                  </div>
                  <div className="imgcontainer row">
                    <div style={{ width: "800px" }}>
                      <Carousel responsive={responsive}>
                        {state?.image?.map((images, i) => {
                          return (
                            <div className="addi-img">
                              <img
                                className="additionalImage"
                                src={images}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </Carousel>
                    </div>
                  </div>
                  <div className="keywords">
                    {blogDetails?.key.map((keys, index) => {
                      return (
                        <>
                          <Link
                            to="/view-blog"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="key">
                              <p>{keys.text}</p>
                            </div>
                          </Link>
                          {blogDetails?.key?.length - 1 != index && (
                            <p className="mx-3 mb-0">|</p>
                          )}
                        </>
                      );
                    })}
                  </div>
                  {blogDetails?.tag?.length != 0 && (
                    <Link
                      to="/view-blog"
                      className="tag"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <p
                        className="mb-0"
                        style={{ textDecoration: "underline" }}
                      >
                        <BiPurchaseTagAlt size={22} />
                        &nbsp;{blogDetails?.tag}
                      </p>
                    </Link>
                  )}
                </div>
              </div>
              <div className="aside_container">
                <div className="col">
                  <div className="row">
                    {lastpost.reverse().map((post, index) => {
                      return (
                        <div className="last_post">
                          <img src={post?.mainImage} alt="" />
                          <p>{post?.title}</p>
                          <p>{post?.userName}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-box">
              <div className="commentbox-input-fields">
                <h4>Comment Box</h4>
                <strong>
                  <label>User Name</label>
                </strong>
                <input
                  className="user-name"
                  placeholder="User name"
                  id="userName"
                />
                <strong>
                  <label>Comments</label>
                </strong>
                <textarea
                  className="form-control"
                  placeholder="Type Your Comment"
                  id="comment"
                />
                <button type="submit" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </div>
              <div className="view-comments">
                {commentsList?.length > 0 && (
                  <div className="comments">
                    <div className="comments-h">
                      <span className="tag">Comments</span>
                    </div>
                    {commentsList?.reverse().map((c, index) => (
                      <p>
                        <strong>{c.userName}:</strong>&emsp;{c.comment}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
