import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import AdminModal from '../Admin-Modal/AdminModal';
import { useHistory } from 'react-router';
import UploadDocuments from '../Upload-documents/UploadDocuments';
import Delivery from './../Delivery-Pump/Delivery';
import CommingSoon from './../Comming/CommingSoon';


const AdminAddProduct = () => {
    const [modalShow, setModalShow] = useState(false);
    const [allItemShow, setAllItemShow] = useState(false);
    const [adminShow, setAdminShow] = useState(null);
    const history=useHistory()
    const uploadDocs=()=>{
      setAllItemShow(false)
    setAdminShow(0)
    }
    const gotoCommingSoon=()=>{
      setAdminShow(2)
    }
    const productManagement=()=>{
setAllItemShow(true)
setAdminShow(1)
    }
    return (
        <>
        <section className="d-flex justify-content-center bg-dark">
        <ButtonGroup vertical>
        <Button className="mt-2 px-2" variant="primary" onClick={() => setModalShow(true)}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faCartPlus}/></span>
Add Product
</Button>
<Button className="my-2 px-2" onClick={productManagement}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faToolbox}/></span>Product Management</Button>
  <Button className="mt-2 px-2" onClick={uploadDocs}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faUser}/></span>Upload Docs</Button>
  <Button className="mt-2 px-2" onClick={uploadDocs}> <span className="fs-4 me-2"><FontAwesomeIcon icon={faUser}/></span>Add Member</Button>
  
  <Button onClick={gotoCommingSoon} className="my-2 px-2"> <span className="fs-4 me-2"><FontAwesomeIcon icon={faTools}/> </span>Settings</Button>
</ButtonGroup>
  
        </section>
        <AdminModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
{allItemShow&&adminShow>0&&adminShow<2&& <Delivery allItemShow={allItemShow}/>}
{adminShow<1&&< UploadDocuments/>}
{adminShow>1&&< CommingSoon/>}
      </>
    );
};

export default AdminAddProduct;