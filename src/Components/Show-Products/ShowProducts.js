import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Showproduct.css'

const ShowProducts = ({products}) => {
    const{model,imageUrl,category,_id}=products;
    const showStock=(id)=>{
console.log(id)
    }
    return (
        <div className='col-lg-4 text-center'>
        
  <Card className="my-card rounded">
    <Card.Img variant="top" src={imageUrl} className='my-photo' />
    <Card.Body>
      <Card.Title>{category}</Card.Title>
      <Link to={`/product/${category}`}><Button className='btn btn-danger px-3 mt-3'>Details</Button></Link>
     <Link to={`/stock/${category}`}><Button className='btn btn-success ms-3 mt-3'>Stock-Check</Button></Link> 
     
    </Card.Body>
  </Card>
        </div>
    );
};

export default ShowProducts;