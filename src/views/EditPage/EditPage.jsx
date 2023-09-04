import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import { useContext } from 'react'
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import TextEditor from "../../components/TextEditor/TextEditor";
import { BsCardImage } from "react-icons/bs"
import { WithContext as ReactTags } from 'react-tag-input';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import ImageGallaryModal from "../../components/ImageGallaryModel/ImageGallaryModal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../components/Right_Pannel/RightNav.css"
import "../../components/Left_Pannel/LeftNav.css"
import parse from "html-react-parser"
import "./EditPage.css"

const EditPage = () => {
    let editblog = useRef([])
    editblog = JSON.parse(localStorage.getItem("blogList"));
    const { id } = useParams()
    let [value, setValue] = useState(editblog[id].dropdownValue);
    const editorRef = useRef();
    let editor = useRef(editblog[id].editor)
    let [tags, setTags] = useState([editblog[id].key]);
    // here storeing the image 
    let [imageToShow, setImageToShow] = useState(editblog[id].mainImage)
    const [imageToShowSecond, setImageToShowSecond] = useState([editblog[id].image]);

    function multiImgFunc(a) {
        if (imageToShowSecond.includes(a)) {
            toast("Image already selected")
        }
        else {
            setImageToShowSecond([...imageToShowSecond, a]);
        }
    }

    const AdditionalDelete = (i) => {
        setImageToShowSecond(imageToShowSecond.filter((img, index) => index !== i))
    }

    function editorImageInsert(a) {
        editorRef.current.editorCommands.commands.exec.insertimage('InsertImage', false, a);
    }

    const handleSelect = (e) => {
        setValue(e)
    }
    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    console.log(editblog[id])

    console.log(editblog)
    const updateHtml = () => {
        return (
            <div className={'RightNav'}>
                <div className="container-fluid">
                    <h4>Update Blog</h4>
                    <div className="row m-0">
                        <div className="col-md-9">
                            <div className="blog-input Card1">
                                <form >
                                    <p>Title</p>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            id="title"
                                            name='title'
                                            defaultValue={editblog[id].title}
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Title"
                                            type="text"
                                        />
                                    </InputGroup>
                                    <Form.Group
                                        className="mb-3"

                                    >
                                        <Form.Label>Summary & Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Summary & Description" name="description" id="description" defaultValue={editblog[id].description} />
                                    </Form.Group>
                                    {/* <Keyword /> */}
                                    <p> Keywords </p>
                                    {
                                        editblog[id]?.key?.map((item, index) => {
                                            return (
                                                <p className='keyword'>{item.text}</p>
                                            )
                                        })
                                    }
                                    <ReactTags
                                        tags={tags}
                                        allowDragDrop={false}
                                        handleDelete={handleDelete}
                                        handleAddition={handleAddition}
                                        defaultValue={tags}
                                    />
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="check1">
                                            Add to Slider
                                        </label>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="check1"
                                            name="option1"
                                            defaultValue="Add to Slider"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="check2">
                                            Add to Popular Post
                                        </label>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="check2"
                                            name="option2"
                                            defaultValue="Add to Popular Post"
                                        />
                                    </div>
                                    <p>Tag</p>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Tag"
                                            name="tag"
                                            id="tag"
                                            defaultValue={editblog[id].tag}
                                        />
                                    </InputGroup>
                                    <p>Type tag and hit enter</p>
                                </form>

                            </div>
                            <div className="d-flex align-items-center addImg" style={{ backgroundColor: "white" }}>
                                <ImageGallaryModal setImagePath={(a)=>{editorImageInsert(a)}} detection={'editor'} buttonComponent={
                                    <Button className="select-btn-with-image">
                                        <span> <BsCardImage /> </span> <span> Add Image</span>
                                    </Button>} />
                                &nbsp;&nbsp;
                                <h6 className="mb-3 text-danger fw-600">
                                    ( ONLY JPEG,PNG )</h6>
                            </div>
                            <TextEditor editorRef={editorRef} defaultValue={editor.value} />
                            <div className="Publish-btn">
                                <p>Publish</p>
                                <Button onClick={'handleSubmit'} type="submit" variant="primary" style={{ marginRight: '78px', marginLeft: '12px' }}>SUBMIT</Button>{' '}
                                <Button variant="warning">Save as Draft</Button>{' '}
                                <ToastContainer />
                            </div>
                            {/* MODAL FOR IMAGE CARD */}



                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p style={{ fontWeight: '500' }}>Image</p>
                                {/* calling the props setImagePath which accept the one parameter a and passing it to the setImageshow which show the image */}
                                <ImageGallaryModal setImagePath={(a) => { multiImgFunc(a) }} detection={'multiImage'} buttonComponent={
                                    <Button className="select-btn">
                                        Select Image
                                    </Button>} />

                                {/* geting data from child components */}

                                {imageToShow != null && <img id="imageShow" src={imageToShow} alt="UplodadeImage" />}


                            </div>
                            {/* MODAL FOR IMAGE CARD */}
                            <div className="card card2 ">
                                <span style={{ fontWeight: '500', marginBottom: 'none' }}>Additional Image</span>
                                <p>More main images (slider will be active)</p>
                                <ImageGallaryModal setImagePath={(a) => { multiImgFunc(a) }} detection={''} buttonComponent={
                                    <Button className="select-btn">
                                        Select Image
                                    </Button>} />
                                {
                                    imageToShowSecond.map((item, index) => {

                                        return (
                                            <div className="position-relative inside-card">
                                                <div className="position-absolute top-0 end-0">
                                                    <button onClick={() => AdditionalDelete(index)} style={{ backgroundColor: 'red' }} type="button" class="btn-close" aria-label="Close">
                                                    </button>
                                                </div>
                                                <img id='AdditionalImage' key={index} src={item} alt="AdditionalImage" style={{ marginBottom: '15px' }} />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="card mt-3">
                                <span style={{ fontWeight: '500', marginBottom: 'none' }}>Category</span>
                                <DropdownButton
                                    alignright="true"
                                    title={value ?? "NEWS"}
                                    id="dropdown-menu-align-left"
                                    defaultValue={value}
                                    onSelect={handleSelect}
                                >
                                    <Dropdown.Item id="dropdown-menu-align-left" eventKey="News">News</Dropdown.Item>
                                    <Dropdown.Item id="dropdown-menu-align-left" eventKey="Feeds">Feeds</Dropdown.Item>
                                    <Dropdown.Item id="dropdown-menu-align-left" eventKey="Headline">Headline</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
    return (
        <>
            <div className='Blog-post-container'>
                <LeftNav />
                <div className="container-fluid" >
                    <Header />
                    <div>
                        {updateHtml()}
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditPage