import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import DeliveryModal from './DeliveryModal';

const ModelStockList = ({pumpModel}) => {
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            
    console.log(pumpModel)

    const deliveryProduct=(info)=>{
setDeliveryInfo(info)
setShow(true)
    }
    
    return (
      <>
        <div>
          <DeliveryModal/>
          <h2>{pumpModel.length} Items</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>SL</th>
          <th>Model</th>
          <th>Category</th>
          <th>Serial</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      
     {pumpModel.map((item,index)=><tr>
      <td>{index+1}</td>
      <td>{item.model}</td>
      <td>{item.category}</td>
      <td>{item.serial}</td>
      <td><button className='btn btn-danger'onClick={()=>{deliveryProduct(item)}}>Delivery</button></td>
    </tr>)}
     

  
</tbody>
</Table>
  
</div>

<DeliveryModal show={show} handleClose={handleClose} deliveryInfo={deliveryInfo}/>



</>

    );
};



export default ModelStockList;