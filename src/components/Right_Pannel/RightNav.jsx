import React, { useRef } from "react";
import { useState } from "react";
import "./RightNav.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import ImageGallaryModal from "../ImageGallaryModel/ImageGallaryModal";
import TextEditor from "../TextEditor/TextEditor";
import { BsCardImage } from "react-icons/bs"
import { WithContext as ReactTags } from 'react-tag-input';


const RightNav = () => {

  const [value, setValue] = useState(null);
  const editorRef = useRef(null);
  const [tags, setTags] = useState([]);
  

  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }

  const handleSubmit = () => {
    // event.preventDefault();
    // for title

    const title = document.getElementById("title")
    //for description
    const desCription = document.getElementById("description")
    //for keywords
    const check1 = document.getElementById('check1')
    const check2 = document.getElementById('check2')
    const tag = document.getElementById('tag')

    console.log(title.value);
    console.log(desCription.value);
    console.log(tags)
    console.log(check1.value);
    console.log(check2.value);
    console.log(tag.value);
    console.log(editorRef.current.getContent());
  }

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };
  //for accepting the data from child to parent
  // function GetData(){
  //   console.log('hii')
  // }
  return (
    <>
      <div className="RightNav">
        <h4>Create Blog</h4>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-input Card1">
                <form>
                  <p>Title</p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      id="title"
                      name='title'
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="Title"
                      type="text"
                    />
                  </InputGroup>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Summary & Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Summary & Description" name="description" id="description" />
                  </Form.Group>
                  {/* <Keyword /> */}
                  <p> Keywords </p>
                  <ReactTags
                    tags={tags}
                    allowDragDrop={false}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                  />
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="check2">
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
                    />
                  </InputGroup>
                  <p>Type tag and hit enter</p>
                  <div className="d-flex align-items-center">
                    <ImageGallaryModal buttonComponent={
                      <Button className="select-btn-with-image">
                        <span> <BsCardImage /> </span> <span> Additional Image</span>
                      </Button>} />
                    &nbsp;&nbsp;
                    <h6 className="mb-3 text-danger fw-600">
                      ( ONLY JPEG,PNG )</h6>
                  </div>
                  {/* text editor */}
                </form>
              </div>
              <TextEditor editorRef={editorRef} />
              <div className="Publish-btn">
                <p>Publish</p>
                <Button onClick={handleSubmit} type="submit" variant="primary" style={{ marginRight: '78px', marginLeft: '12px' }}>SUBMIT</Button>{' '}
                <Button variant="warning">Save as Draft</Button>{' '}
              </div>
            </div>
            {/* MODAL FOR IMAGE CARD */}
            <div className="col-md-3">
              <div className="card">
                <p style={{ fontWeight: '500' }}>Image</p>
                <ImageGallaryModal buttonComponent={
                  <Button className="select-btn">
                    Select Image
                  </Button>} />
                {/* geting data from child components */}
                <ImageGallaryModal/>

              </div>
              {/* MODAL FOR IMAGE CARD */}
              <div className="card card2 ">
                <span style={{ fontWeight: '500', marginBottom: 'none' }}>Additional Image</span>
                <p style={{}}>More main images (slider will be active)</p>
                <ImageGallaryModal buttonComponent={
                  <Button className="select-btn">
                    Select Image
                  </Button>} />
              </div>
              <div className="card mt-3">
                <span style={{ fontWeight: '500', marginBottom: 'none' }}>Category</span>
                <DropdownButton
                  alignRight
                  title={value ?? "NEWS"}
                  id="dropdown-menu-align-left"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey="News">News</Dropdown.Item>
                  <Dropdown.Item eventKey="Feeds">Feeds</Dropdown.Item>
                  <Dropdown.Item eventKey="Headline">Headline</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNav;
