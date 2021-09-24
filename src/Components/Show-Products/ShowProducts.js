import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import showProductsCss from './Showproduct.css'

const ShowProducts = ({products}) => {
    const{model,imageUrl,category,_id}=products;
    const showStock=(id)=>{
console.log(id)
    }
    return (
        <div className='col-lg-4 text-center'>
        
  <Card>
    <Card.Img variant="top" src={imageUrl} className='my-photo' />
    <Card.Body>
      <Card.Title>Model:{category}</Card.Title>
      <Link to={`/admin`}><Button className='btn btn-danger'>Details</Button></Link>
     <Link to={`/stock/${category}`}><Button className='btn btn-success ms-2'>Stock-Check</Button></Link> 
     
    </Card.Body>
  </Card>
        </div>
    );
};

export default ShowProducts;