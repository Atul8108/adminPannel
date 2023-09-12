import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

const DeleteBtn = ({ deletefunction }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div>
                <Button variant="danger" onClick={handleShow}>
                    Delete Post
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are You Sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Post will be deleted , please Confirm</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => deletefunction()}>
                            Delete Post
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default DeleteBtn