import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import AdminModal from '../Admin-Modal/AdminModal';

const AdminAddProduct = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
        <section className="d-flex justify-content-center bg-dark">
        <ButtonGroup vertical>
        <Button className="mt-2 px-2" variant="primary" onClick={() => setModalShow(true)}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faCartPlus}/></span>
Add Product
</Button>
  <Button className="mt-2 px-2"> <span className="fs-4 me-2"><FontAwesomeIcon icon={faUser}/></span>Add Member</Button>
  <Button className="mt-2 px-2">Team Management</Button>
  <Button className="my-2 px-2">Reset All</Button>
</ButtonGroup>
  
        </section>
        <AdminModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
};

export default AdminAddProduct;