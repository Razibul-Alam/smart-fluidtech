
import { Button,ListGroup,Offcanvas  } from 'react-bootstrap';
const AdminPage = ({show,handleClose}) => {
    return (
        <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ListGroup>
  
  <ListGroup.Item variant="secondary">Add Product</ListGroup.Item>
  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
  <ListGroup.Item variant="success">Success</ListGroup.Item>
 
</ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};

export default AdminPage;