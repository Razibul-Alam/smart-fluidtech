import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import showProductsCss from './Showproduct.css'

const ShowProducts = ({products}) => {
    const{model,img,category,id}=products;
    const showStock=(id)=>{
console.log(id)
    }
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
      <Link to={`/admin/${id}`}><Button className='btn btn-danger'>Details</Button></Link>
     <Link to={`/stock/${model}`}><Button className='btn btn-success ms-2'>Stock-Check</Button></Link> 
     
    </Card.Body>
  </Card>
        </div>
    );
};

export default ShowProducts;