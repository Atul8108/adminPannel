import React, { useRef, useState } from 'react'
import "./BlogPage.css"
import { Link, useParams } from 'react-router-dom';
import LeftNav from '../../components/Left_Pannel/LeftNav';
import Header from '../../components/Header/Header';
import parse from "html-react-parser"
import { BiSolidTimeFive } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';
import $ from "jquery"


const BlogPage = () => {

    let { id } = useParams();
    const blog = useRef();
    let singleBlog = useRef();
    const [commentsList, setCommentsList] = useState([]);
    let commentList = [];

    blog.current = JSON.parse(localStorage.getItem("blogList"));
    singleBlog.current = blog?.current[id];


    function handleSubmit() {
        let newComment = {
            userName: document.getElementById("userName").value,
            comment: document.getElementById("comment").value,
        };

        commentList = [...commentsList, newComment];
        setCommentsList(commentList);
        singleBlog.current.comments = commentList;
        blog.current[id] = singleBlog.current;
        console.log(blog.current[0]);
        localStorage.setItem("blogList", JSON.stringify(blog.current));
        document.getElementById("userName").value = null;
        document.getElementById("comment").value = null;
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 2000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    $(".navbar-toggler").click(() => {
      setIsOpen(!isOpen);
    })
  }, [isOpen])
    return (
        <>
            <div className="w-100 d-flex global-layout">
                <LeftNav />
                <div className={`main-content ${isOpen ? "openRightNav" : "closeRightNav"}`}>
                    <Header />
                    <div className="blog-page">
                    <div className="inner-container">
                        <h1 className='title1'>{singleBlog?.current?.title}</h1>
                        <p className='title1'>Author Name: {singleBlog?.current?.userName} {singleBlog?.current?.lastName}</p>
                        <div className="container2 d-flex " style={{ alignItems: "center" }}>
                            <p className='category mr-2'>{singleBlog.current?.dropdownValue}</p>
                            <p><BiSolidTimeFive className='mr-1' />{singleBlog.current?.createDateTime}</p>
                        </div>
                        <div className='main_content'>
                            <div className='editor'>
                                <p>{parse(singleBlog?.current?.editor)}</p>
                            </div>
                            <div className='image'>
                                <img className="MainImage" src={singleBlog.current?.mainImage} alt="MainImage" />
                                <p className='Description'><strong>Description:</strong><br />{singleBlog?.current?.description}</p>
                            </div>


                            <div className='imgcontainer row'>
                                <div style={{ width: "800px" }}>
                                    <Carousel responsive={responsive}>
                                        {
                                            singleBlog?.current?.image?.map((images, i) => {
                                                return (
                                                    <div className='addi-img'>
                                                        <img className='additionalImage' src={images} alt='' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </div>
                            </div>
                            <div className='keywords'>
                                <p className='keywords-item'><strong>Keywords:&nbsp;</strong>
                                    {
                                        singleBlog?.current?.key.map((keys, index) => {
                                            return (
                                                <Link to='/view-blog' style={{ textDecoration: "none" }}><div className="tags"><p>{keys.text}&nbsp;</p></div></Link>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                            {
                                singleBlog?.current?.tag.length == 0 ? <p></p> : <p ><strong>Tag:</strong>&emsp; <Link to='/view-blog' className='Tag' style={{ textDecoration: "none" }}>{singleBlog?.current?.tag}</Link></p>
                            }

                        </div>
                        {/* comment section */}
                        <div className="comment-box">
                            <h4>Comment Box</h4>
                            <hr style={{ color: "black" }} />
                            <strong><label>User Name</label></strong>
                            <input
                                className='user-name'
                                placeholder='User name'
                                id='userName'
                            />
                            <strong><label>Comments</label></strong>
                            <textarea
                                className='form-control'
                                placeholder='Type Your Comment'
                                id='comment'
                            />
                            <button type='submit' onClick={() => handleSubmit()}>Submit</button>
                            {
                                singleBlog?.current?.comments?.length > 0 && (
                                    <div class="task" >
                                        <div class="tags">
                                            <span class="tag">Comments</span>
                                        </div>
                                        
                                        {singleBlog?.current?.comments?.map((c, index) => (
                                        <p><strong>{c.userName}:</strong>&emsp;{c.comment}</p>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default BlogPage