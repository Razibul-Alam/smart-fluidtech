import React from 'react';
import { Card, Button, Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'react-router';
import useBannerProduct from '../../Custom-Hooks/useBannerProduct';
import  './SingleProduct.css'
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const[product]=useBannerProduct()
    const{id}=useParams()
    const singleItem=product?.find(item=>item.category==id)
    console.log(singleItem)
    // const{category,model,type,imageUrl}=singleItem;
    return (
        <>
  
  <div className='d-flex justify-content-center text-center row mt-5 mx-2'>
        
        <Card className="rounded col-lg-6 col-sm-10">
          <Card.Img variant="top" src={singleItem?.imageUrl} className='my-photo' />
          <Card.Body>
            <Card.Title>{singleItem?.category}</Card.Title>
            
           <div className='d-flex justify-content-around mt-3'>
           <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="See more" className="text-center">
      <DummyText/>
  </Tab>
</Tabs>
<Link to={`/`}><Button className='btn btn-danger btn-sm mt-3'>Home</Button></Link>
           </div>
           
          </Card.Body>
        </Card>
              </div>
</>
    );
};

    
    
    const DummyText= () => {
        return (
            <div eventKey="home">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi expedita recusandae eaque fugiat, aliquid assumenda, molestiae quae magnam, officia error ipsam fuga. Aliquid rerum impedit deleniti facilis aperiam hic iure molestias magni velit fuga minus suscipit officiis, dolores rem necessitatibus facere recusandae, cum quam ea nisi animi? Earum enim soluta eum cupiditate dolorum voluptas molestiae? Eligendi magni mollitia velit perspiciatis consectetur dolor animi, cum quasi quas nihil nulla saepe fuga? 
            </div>
        );
    };
    
    


export default SingleProduct;