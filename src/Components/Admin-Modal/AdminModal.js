import React from 'react';
import Admin from '../Admin/Admin';
import { Modal, Button } from 'react-bootstrap';
const AdminModal = (props) => {
    return (
        <>
                  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Admin modalClose={props.onHide}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
              </>
    );
};

export default AdminModal;