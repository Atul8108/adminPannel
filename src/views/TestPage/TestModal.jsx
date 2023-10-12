import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import "./TestPage.css"
const TestModal = ({ arr ,state }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    let colors = ['#DD1010','#40EE20','#4040FF'];
    
    return (
        <>
            <Button className='btn btn-sm btn-primary w-100' onClick={handleShow}>
                Show City
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>The City are: {state}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='city'>
                    {   
                        arr?.map((data ,index) => {
                            return (
                                <>  
                                    {
                                       <p id={index} style={{ color: colors[index] }}>{data} { arr?.length -1 !=index && ","}</p>
                                    }
                                </>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TestModal