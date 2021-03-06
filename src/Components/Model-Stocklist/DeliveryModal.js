import React from 'react';
import { Modal } from 'react-bootstrap';
import DeliverySubmit from './DeliverySubmit/DeliverySubmit';

const DeliveryModal = ({show,handleClose,deliveryInfo}) => {
    return (
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delivery Item Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                 <DeliverySubmit deliveryInfo={deliveryInfo} handleClose={handleClose}/>
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
              </>
           
       
    );
};

export default DeliveryModal;