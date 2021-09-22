import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import DeliverySubmit from './DeliverySubmit/DeliverySubmit';

const DeliveryModal = ({show,handleClose,deliveryInfo}) => {
    return (
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                 <DeliverySubmit deliveryInfo={deliveryInfo} handleClose={handleClose}/>
                 <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>

                  </Modal.Body>
                  <Modal.Footer>
                    
                    {/* <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button> */}
                  </Modal.Footer>
                </Modal>
              </>
           
       
    );
};

export default DeliveryModal;