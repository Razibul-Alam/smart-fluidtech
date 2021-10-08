import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import AdminModal from '../Admin-Modal/AdminModal';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import UploadDocuments from '../Upload-documents/UploadDocuments';
import AllPumps from '../All-Pumps/AllPumps';
import Delivery from './../Delivery-Pump/Delivery';

const AdminAddProduct = () => {
    const [modalShow, setModalShow] = useState(false);
    const [allItemShow, setAllItemShow] = useState(false);
    const history=useHistory()
    const uploadDocs=()=>{
      setAllItemShow(false)
    history.push('/uploaddoc')
    }
    const gotoCommingSoon=()=>{
      setAllItemShow(false)
    history.push('/comming')
   
    }
    const productManagement=()=>{
setAllItemShow(true)
    }
    return (
        <>
        <section className="d-flex justify-content-center bg-dark">
        <ButtonGroup vertical>
        <Button className="mt-2 px-2" variant="primary" onClick={() => setModalShow(true)}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faCartPlus}/></span>
Add Product
</Button>
<Button className="my-2 px-2" onClick={productManagement}>Product Management</Button>
  <Button className="mt-2 px-2" onClick={uploadDocs}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faUser}/></span>Upload Docs</Button>
  <Button className="mt-2 px-2" onClick={uploadDocs}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faUser}/></span>Add Member</Button>
  
  <Button onClick={gotoCommingSoon} className="my-2 px-2">Settings</Button>
</ButtonGroup>
  
        </section>
        <AdminModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
{allItemShow&&<Delivery allItemShow={allItemShow}/>}
      </>
    );
};

export default AdminAddProduct;