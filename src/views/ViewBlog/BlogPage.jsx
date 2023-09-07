import React, { useRef, useState } from 'react'
import "./BlogPage.css"
import { useParams } from 'react-router-dom';
import LeftNav from '../../components/Left_Pannel/LeftNav';
import Header from '../../components/Header/Header';
import parse from "html-react-parser"
import { BiSolidTimeFive } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BlogPage = () => {

    let { id } = useParams();
    const blog = useRef();
    let singleBlog = useRef();
    const [commentsList, setCommentsList] = useState([]);
    let commentList = [];

    blog.current = JSON.parse(localStorage.getItem("blogList"));
    singleBlog.current = blog.current[id];


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
            breakpoint: { max: 4000, min: 3000 },
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
    return (
        <>
            <div className="Container">
                <LeftNav />
                <div className="blog-page">
                    <Header />
                    <div className="inner-container">
                        <h1 className='title'>{singleBlog?.current?.title}</h1>
                        <div className="container d-flex " style={{ alignItems: "center" }}>
                            <p className='category mr-2'>{singleBlog.current?.dropdownValue}</p>
                            <p><BiSolidTimeFive className='mr-1' />{singleBlog.current?.createDateTime}</p>
                        </div>
                        <div className='container'>
                            <div className='image'>
                                <img className="MainImage" src={singleBlog.current?.mainImage} alt="MainImage" />
                                <p className='Description'><strong>Description:</strong><br />{singleBlog?.current?.description}</p>
                            </div>
                            <div className='editor'>
                                <p>{parse(singleBlog?.current?.editor)}</p>
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
                                                <div className="tags"><p>{keys.text},&nbsp;</p></div>
                                            )
                                        })
                                    }
                                </p>

                            </div>
                            <p>{singleBlog?.current?.tag}</p>

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
                                    <div className='commentbox'>
                                        <h2>Comments</h2>
                                        <ul>
                                            {singleBlog?.current?.comments?.map((c, index) => (
                                                <li key={index}>
                                                    <p><strong>{c.userName}:</strong>&emsp;{c.comment}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default BlogPage