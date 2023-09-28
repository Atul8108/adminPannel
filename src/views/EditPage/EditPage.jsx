import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import TextEditor from "../../components/TextEditor/TextEditor";
import { BsCardImage } from "react-icons/bs"
import { WithContext as ReactTags } from 'react-tag-input';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import ImageGallaryModal from "../../components/ImageGallaryModel/ImageGallaryModal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../components/Right_Pannel/RightNav.css"
import "../../components/Left_Pannel/LeftNav.css"
import "./EditPage.css"
import $ from "jquery"
import { BLOGLIST, USERINFO } from '../../api/locaStorage.data';

let allBlog = [];

const EditPage = () => {
    
    useEffect(() => {
        allBlog = JSON.parse(BLOGLIST());
    }, [])

    const editorRef = useRef();
    const { state } = useLocation()

    let editor = useRef(state?.editor)
    let [value, setValue] = useState(state?.dropdownValue);
    let [tags, setTags] = useState(state?.key);
    let [imageToShow, setImageToShow] = useState(state?.mainImage)
    const [imageToShowSecond, setImageToShowSecond] = useState([state?.image]);
    console.log(imageToShowSecond)

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

    function handleAddition(tag) {
        setTags([...tags, tag]);
    };
    async function updateSubmit(status) {
        // allBlog = JSON.parse(BLOGLIST());
        const title = document.getElementById("title")
        const desCription = document.getElementById("description")
        let check1 = document.getElementById('check1')
        const check2 = document.getElementById('check2')
        const tag = document.getElementById("tag")
        if (!title.value) {
            toast("title is empty")
        }
        else if (!imageToShow) {
            toast('Upload the Image')
        }
        else if (!desCription.value) {
            toast('description is empty')
        }
        else if (!tags) {
            toast("Please Enter the Keyword")
        }
        else if (!check1.value) {
            toast('Please Check The box')
        }
        else if (!check2.value) {
            toast('Please Check The box')
        }
        else if (!imageToShowSecond) {
            toast('Please add the second Image')
        }
        else if (!value) {
            toast('Please select category')
        }

        else {
            let blogData = {
                "id": new Date().valueOf(),
                "title": title.value,
                "mainImage": imageToShow,
                "description": desCription.value,
                "key": tags,
                "check1": check1.value,
                "check2": check2.value,
                "editor": editorRef.current.getContent(),
                "tag": tag.value,
                "image": imageToShowSecond,
                "dropdownValue": value,
                "createDateTime": new Date().toLocaleString(),
                "status": status,
                "userName": JSON.parse(USERINFO())?.userName + " " + JSON.parse(USERINFO())?.lastName,
            }
            const updatedList = allBlog.map((data, item) => {
                if (data.id == state.id) {
                    return { ...data, ...blogData };
                } else return data;
            })

            localStorage.setItem("blogList", JSON.stringify(updatedList));

            if (status === "PUBLISH") {
                toast.success("Your Blog is Updated");
            }
            else {
                toast.info("Saved as Draft");
            }
        }
    }
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        $(".navbar-toggler").click(() => {
            setIsOpen(!isOpen);
        })
    }, [isOpen])

    const updateHtml = () => {
        return (
            <div className={`RightNav ${isOpen ? "openRightNav" : "closeRightNav"}`}>
                <div className="container-fluid bgColor">
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
                                            defaultValue={state?.title}
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
                                        <Form.Control as="textarea" rows={3} placeholder="Summary & Description" name="description" id="description" defaultValue={state?.description} />
                                    </Form.Group>
                                    {/* <Keyword /> */}
                                    <p> Keywords </p>
                                    <ReactTags
                                        tags={tags}
                                        allowDragDrop={false}
                                        handleDelete={handleDelete}
                                        handleAddition={(tag) => { handleAddition(tag) }}
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
                                            defaultChecked={state.check1}
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
                                            defaultChecked={state.check2}
                                        // checked={state.check2.length >0 ?? "checked"}
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
                                            defaultValue={state?.tag}
                                        />
                                    </InputGroup>
                                    <p>Type tag and hit enter</p>
                                </form>

                            </div>
                            <div className="d-flex align-items-center addImg" style={{ backgroundColor: "white" }}>
                                <ImageGallaryModal setImagePath={(a) => { editorImageInsert(a) }} detection={'editor'} buttonComponent={
                                    <Button className="select-btn-with-image">
                                        <span> <BsCardImage /> </span> <span> Add Image</span>
                                    </Button>} />
                                &nbsp;&nbsp;
                                <h6 className="mb-3 text-danger fw-600">
                                    ( ONLY JPEG,PNG )</h6>
                            </div>
                            <TextEditor editorRef={editorRef} value={editor.current} />
                            <div className="Publish-btn">
                                <p>Publish</p>
                                <Link to={"/view-blog"}><Button onClick={() => updateSubmit("PUBLISH")} type="submit" variant="primary" style={{ marginRight: '78px', marginLeft: '12px' }}>Update Blog</Button>{' '}</Link>
                                <Link to={"/view-blog"}><Button variant="warning" onClick={() => updateSubmit("DRAFT")}>Save as Draft</Button>{' '}</Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p style={{ fontWeight: '500' }}>Image</p>
                                <ImageGallaryModal setImagePath={(a) => { setImageToShow(a) }} detection={'singleImage'} buttonComponent={
                                    <Button className="select-btn">
                                        Select Image
                                    </Button>} />
                                {imageToShow != null && <img id="imageShow" src={imageToShow} alt="UplodadeImage" />}

                            </div>
                            {/* MODAL FOR IMAGE CARD */}
                            <div className="card card2 ">
                                <span style={{ fontWeight: '500', marginBottom: 'none' }}>Additional Image</span>
                                <p>More main images (slider will be active)</p>
                                <ImageGallaryModal setImagePath={(a) => { multiImgFunc(a) }} detection={'multiImage'} buttonComponent={
                                    <Button className="select-btn">
                                        Select Image
                                    </Button>} />
                                {
                                    imageToShowSecond.map((item, index) => {
                                        return (
                                            item.length > 0 ? <div className="position-relative inside-card">
                                                <div className="position-absolute top-0 end-0">
                                                    <button onClick={() => AdditionalDelete(index)} style={{ backgroundColor: 'red' }} type="button" class="btn-close" aria-label="Close">
                                                    </button>
                                                </div>
                                                <img id='AdditionalImage' key={index} src={item} alt="AdditionalImage" style={{ marginBottom: '15px' }} />
                                            </div> : ""

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
            <div className='Blog-post-container d-flex global-layout w-100'>
                <LeftNav />
                <div className="main-content" >
                    <div className={`container-fluid ${isOpen ? "openRightNav" : "closeRightNav"}`}>
                        <Header />
                        {updateHtml()}
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditPage