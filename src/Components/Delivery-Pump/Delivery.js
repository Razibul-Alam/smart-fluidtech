import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';

const Delivery = () => {
    const[deliveryList,setDeliveryList]=useState([])
    
    useEffect(()=>{
        const url='https://ancient-beach-26659.herokuapp.com/allDeliveryList'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDeliveryList(data))
    },[])
    console.log(deliveryList)
    return (
        <div>
          <h2>{deliveryList.length} Items</h2>
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

      
     {deliveryList.map((item,index)=><tr>
      <td>{index+1}</td>
      <td>{item.model}</td>
      <td>{item.category}</td>
      <td>{item.serial}</td>
    </tr>)}
     

  
</tbody>
</Table>
  
</div>
    );
};

export default Delivery;