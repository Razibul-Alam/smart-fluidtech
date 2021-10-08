import React, { useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import DeliveryModal from './DeliveryModal';

const ModelStockList = ({pumpModel}) => {
  const[loggedInUser,setLoggedInUser]=useContext(userContext);
  const history=useHistory()
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            
    console.log(pumpModel)

    const deliveryProduct=(info)=>{
if(loggedInUser){
  setDeliveryInfo(info)
  setShow(true)
}else{
history.push('/login')
}
    }
   
    
    return (
      <>
        <div>
          <DeliveryModal/>
          <h2 className="text-center text-danger">{pumpModel.length} Items</h2>
      <Table striped bordered hover responsive variant='dark'>
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
      <td><button className='btn btn-success'onClick={()=>{deliveryProduct(item)}}>Delivery</button></td>
      
    </tr>)}
     

  
</tbody>
</Table>
  
</div>

<DeliveryModal show={show} handleClose={handleClose} deliveryInfo={deliveryInfo}/>



</>

    );
};



export default ModelStockList;