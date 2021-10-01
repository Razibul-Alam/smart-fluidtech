import React from 'react';
import Admin from '../Admin/Admin';
import { Modal } from 'react-bootstrap';

const AdminModal = ({modalShow,handleModalClose}) => {
    return (
        <>
                <Modal show={modalShow} onHide={handleModalClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delivery Item Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Admin/>
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
              </>
    );
};

export default AdminModal;