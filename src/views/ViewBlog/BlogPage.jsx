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
    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    blog.current = JSON.parse(localStorage.getItem("blogList"));
    singleBlog.current = blog.current[id];
    console.log(singleBlog);

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
                                        console.log(keys)
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
                            <hr style={{color:"black"}}/>
                            <strong><label>User Name</label></strong>
                            <input
                                className='user-name'
                                placeholder='User name'
                                value={userName}
                                onChange={handleUserNameChange}
                            />
                            <strong><label>Comments</label></strong>
                            <textarea
                                className='form-control'
                                placeholder='Type Your Comment'
                                value={comment}
                                onChange={handleCommentChange}
                            />
                            <button type='submit' onClick={handleSubmit}>Submit</button>

                            {commentsList.length > 0 && (
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
    )
}

export default BlogPage