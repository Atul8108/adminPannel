import React, { useRef } from 'react'
import "./BlogPage.css"
import { useParams } from 'react-router-dom';
import LeftNav from '../../components/Left_Pannel/LeftNav';
import Header from '../../components/Header/Header';

const BlogPage = () => {

    let { id } = useParams();
    const blog = useRef();
    let singleBlog = useRef();

    blog.current = JSON.parse(localStorage.getItem("blogList"));
    singleBlog.current = blog.current[id];
    console.log(singleBlog);

    return (
        <>
            <div className="Container">
                <LeftNav />
                <div className="blog-page">
                    <Header/>
                    <div className="inner-container">
                       <h1 className='title'>{singleBlog?.current?.title}</h1>
                    <p>{singleBlog.current?.dropdownValue}</p>
                    <div className='image'>
                        <img className="MainImage" src={singleBlog.current?.mainImage} alt="MainImage" />
                        <p className='Description'>{singleBlog?.current?.description}</p>
                        <p>{new DOMParser().parseFromString(singleBlog?.current?.editor, 'text/xml').firstChild.innerHTML}</p>
                        <img className='additionalImage' src={singleBlog?.current?.image} alt=''/>
                    </div> 
                    </div>
                    
                </div> 
            </div>
            
        </>
    )
}

export default BlogPage