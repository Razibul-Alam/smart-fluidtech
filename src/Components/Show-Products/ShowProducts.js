import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import showProductsCss from './Showproduct.css'

const ShowProducts = ({products}) => {
    const{model,img,category}=products;
    return (
        <div className='col-lg-4 text-center shadow'>
        
  <Card>
    <Card.Img variant="top" src={img} className='my-photo' />
    <Card.Body>
      <Card.Title>Model: {model}</Card.Title>
      <Card.Text>Category: {category}
      </Card.Text>
      <Card.Text>This is your trusted option. You can use this confidently
      </Card.Text>
      <Button className='btn btn-success'>Details</Button>
      <Button className='btn btn-danger ms-2'>Stock-Check</Button>
     
    </Card.Body>
  </Card>
        </div>
    );
};

export default ShowProducts;