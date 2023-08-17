import React, { useCallback, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useDropzone } from 'react-dropzone';
import './ImageGallary.css'


const ImageGallaryModal = ({ buttonComponent }) => {
  
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setSelectedImg(null);
    setShow(false)
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles);
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [selectedImg, setSelectedImg] = useState(null);
  
  const handleDelete = i => {
    setSelectedImg(selectedImg.filter((img, index) => index !== i));
  };

  const handleAddition = img => {
    setSelectedImg([...selectedImg, img]);
    console.log(setSelectedImg)
  };
  return (
    <>
      <div className="btn-section mb-3" style={{ maxWidth: 'max-content' }}
        onClick={() => handleShow()} >
        {buttonComponent}
      </div >
      <Modal
        show={show}
        onHide={() => handleClose()}
        dialogClassName="modal-80w"
      >

        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title ">
            Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-4 " style={{ border: '1px solid c3c1c1' }}>
                <div className="row">
                  <div className="col-12">
                    <section className="container">
                      <div {...getRootProps({ className: 'dropzone' })}>
                        <div className="card-modal border-right" style={{ backgroundColor: "#f9f9f9" }}>
                          <div id="drop-area" className="py-5">
                            <div className="icon text-center">
                              <AiOutlineCloudUpload size={40} />
                            </div>
                          </div>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="row mt-3" style={{ height: '35vh', overflowY: 'scroll' }}>
                  {
                    file.map((data, index) => {
                      return (
                        <div className="col-md-6 mb-2 text-center" >
                          <img style={{ maxWidth: "100%", height: 85, objectFit: 'cover' }} src={URL.createObjectURL(data)} alt='Uploaded_Image' />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="col-md-8">
                <div className="row" style={{ height: "80vh", overflowY: 'scroll' }}>
                  {
                    arr.map((item, index) => {
                      return (
                        <div className="col" style={{ paddingTop: '20px' }} onClick={() => setSelectedImg(index)}>
                          <img src="https://play-lh.googleusercontent.com/4iYfabsphrq4CE-37nGVAUI1cFFYQl5qm5nyJ7EENlgI1WHLmAGJznvFQQO-dHlV6O8=w526-h296-rw" alt="gaming"
                            style={{ width: '200px', height: '200px', objectFit: 'cover', border: selectedImg === index ? "2px solid green" : 'none' }} />
                        </div>
                      )
                    })
                  }
                </div>

              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {selectedImg != null && <div>
                  <Button variant="danger" style={{ marginRight: '200px' }} onClick={handleDelete}>Delete Image</Button>
                  <Button variant="info" onClick={handleAddition}>Upload Image</Button>
                </div>}
                <Button variant="secondary" size="sm" active style={{ float: 'right !important' }} onClick={() => handleClose()}>
                  Close
                </Button>

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ImageGallaryModal