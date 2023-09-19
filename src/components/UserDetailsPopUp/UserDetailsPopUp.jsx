import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const UserDetailsPopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
            <Button variant="danger" onClick={handleShow}>
                    Goto Form
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Fill the Form to Post Your Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Click The Button to fill the Form</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Link to='/user-details'>
                        <Button variant="danger">
                            User Details Form
                        </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default UserDetailsPopUp