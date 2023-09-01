import React, { useRef, useState } from 'react'
import "./BlogPage.css"
import { useParams } from 'react-router-dom';
import LeftNav from '../../components/Left_Pannel/LeftNav';
import Header from '../../components/Header/Header';
import parse from "html-react-parser"

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

    return (
        <>
            <div className="Container">
                <LeftNav />
                <div className="blog-page">
                    <Header />
                    <div className="inner-container">
                        <h1 className='title'>{singleBlog?.current?.title}</h1>
                        <p className='category'>{singleBlog.current?.dropdownValue}</p>
                        <div className='image'>
                            <img className="MainImage" src={singleBlog.current?.mainImage} alt="MainImage" />
                            <p className='Description'><strong>Description:</strong><br />{singleBlog?.current?.description}</p>
                        </div>
                        <div className='editor'>{parse(singleBlog?.current?.editor)}</div>
                        <div className='imgcontainer row'>
                            {
                                singleBlog?.current?.image?.map((images, i) => {
                                    return (
                                        <div className='addi-img'>
                                            <img className='additionalImage' src={images} alt='' />
                                        </div>
                                    )
                                })
                            }
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
                                    <div>
                                        <h2>Comments</h2>
                                        <ul>
                                            {singleBlog?.current?.comments?.map((c, index) => (
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
    )
}

export default BlogPage