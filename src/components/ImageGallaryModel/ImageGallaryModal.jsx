import React, { useCallback, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useDropzone } from 'react-dropzone';
import './ImageGallary.css'


// this is child component step4:- passing setImagePath as a props
const ImageGallaryModal = ({ buttonComponent, setImagePath, detection }) => {

  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);
  const [arr, setArr] = useState([
    "https://play-lh.googleusercontent.com/4iYfabsphrq4CE-37nGVAUI1cFFYQl5qm5nyJ7EENlgI1WHLmAGJznvFQQO-dHlV6O8=w526-h296-rw",
    "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000",
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    "https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg?fit=1920%2C1280&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&usqp=CAU",
    "https://cdn.dribbble.com/users/105429/screenshots/8935955/media/3dbc5aa06098bb3071adaffc155514bf.gif",
    "https://cdn.dribbble.com/users/1967053/screenshots/4541633/___-1.gif",
    "https://cdn.dribbble.com/users/4678/screenshots/2582023/media/81bafd9e758bbbccc053c2d3de36af39.gif",
    "https://cdn.dribbble.com/users/2118466/screenshots/5921293/sequence_03_1.png?resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/9993654/file/original-f8922f86301738803c3d2a82e29d6bec.gif",
    "https://cdn.dribbble.com/users/1181466/screenshots/15487444/media/067cd70b27153ce88d0d802528d48497.gif",
    "https://cdn.dribbble.com/users/5096751/screenshots/16488920/media/1455f8990a83880d42bedb9e1cc09ad1.jpg?resize=800x600&vertical=center",
    "https://cdn.dribbble.com/users/2254381/screenshots/18926938/media/48130c9b0447987995801e66e1a48946.png?resize=1000x750&vertical=center",
    "https://cdn.dribbble.com/users/513479/screenshots/5927823/media/70aefdb8ab32d719bf29a58656c2ed53.jpg?resize=800x600&vertical=center",
    "https://cdn.dribbble.com/users/6578953/screenshots/16141825/media/a6712f701f6343975947df54ff0df91b.png?resize=1000x750&vertical=center"
  ])

  const [selectedImg, setSelectedImg] = useState(null);

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setSelectedImg(null);
    setShow(false)
  }
  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles);
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function handleDelete() {
    setArr(arr.filter((img, index) => index !== selectedImg));
  };
  //step2:- Here we call the HandleUpload function ,This is the function for handleupload 
  function handleUpload() {
    // step3:- Here we select the image
    setImagePath(arr[selectedImg])
    handleClose();
  }
  return (
    <>
      <div className="btn-section mb-3" style={{ maxWidth: 'max-content' }} onClick={() => handleShow()} >{buttonComponent} </div>
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
              <div className="col-md-3 " style={{ border: '1px solid c3c1c1' }}>
                <div className="row">
                  <div className="col-12">
                    <section className="container1">
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
              <div className="col-md-9">
                <div className="row" style={{ height: "80vh", overflowY: 'scroll' }}>
                  {
                    arr.map((item, index) => {
                      return (
                        <div key={index} className="col" style={{ paddingTop: '20px' }} onClick={() => setSelectedImg(index)}>
                          <img src={item} alt="gaming"
                            style={{ width: '200px', height: '200px', objectFit: 'cover', border: selectedImg === index ? "2px solid green" : 'none' }} />
                        </div>
                      )
                    })
                  }
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {selectedImg != null && <div className='upload-delete-btn'>
                    <Button variant="danger" style={{ marginRight: '30px' }} onClick={() => handleDelete()}>Delete Image</Button>
                    {/* step-1 : here we create a handleUpload function */}
                    <Button variant="info" onClick={() => handleUpload()}>Upload Image</Button>
                  </div>}
                  <Button variant="secondary" size="sm" active style={{ float: 'right !important' }} onClick={() => handleClose()}>
                    Close
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ImageGallaryModal