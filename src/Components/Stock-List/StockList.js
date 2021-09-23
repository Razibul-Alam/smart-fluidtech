import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import Delivery from './../Delivery-Pump/Delivery';
import ModelStockList from './../Model-Stocklist/ModelStockList';
const StockList = () => {
  const{id}=useParams()
  // console.log(id)
  const[stocks,setStocks]=useState([])
  const[pumpModel,setPumpModel]=useState([])
  const[showDelivery,setShowDelivery]=useState(true)
  const[deliveryItem,setdeliveryItem]=useState([])

  // get data from server by category
  useEffect(()=>{
    const url=`https://ancient-beach-26659.herokuapp.com/getPump/${id.toLowerCase()}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setStocks(data))
},[])
// console.log(stocks)

// handler for pump model 
const getPumpByModel=(model)=>{
  const url=`https://ancient-beach-26659.herokuapp.com/loadPump/${model}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>setPumpModel(data))
  setShowDelivery(false)
}
console.log(pumpModel)

// delivery item set function
const deliveryProduct=(serial)=>{
  console.log('delivered',serial)
  const newItem=stocks.find(item=>item.serial==serial)
  console.log(newItem)
  // setShowDelivery(false)
  setdeliveryItem([...deliveryItem,newItem])
  console.log(deliveryItem)
  
}
    return (
      
     
        <div>
     <div className="text-center my-5">
{stocks.map(model=><button onClick={()=>{getPumpByModel(model.model)}}>{model.model}</button>)}
            <button onClick={()=>setShowDelivery(true)}>all</button>
     </div>
        {showDelivery?<div>
            <h2 className='text-danger text-center my-3'>Item {stocks?.length}</h2>
           <Table striped bordered responsive hover className="mt-2">
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
  {stocks?.map((pd,index)=>{
       const{model,category,id,serial,_id}=pd
      //  console.log(_id)
       const handleDecrease=async(id)=>{
        console.log(id)
        const response = await fetch(`https://ancient-beach-26659.herokuapp.com/delete/${id}`, {
          method: "DELETE"
        });
        return response.json();
            }
            
       return(
        <tr>
        <td>{index+1}</td>
        <td>{model}</td>
        <td>{category}</td>
        <td>{serial}</td>
        <td><button className='btn btn-warning' onClick={()=>{handleDecrease(_id)}}>Decrease</button></td>
        <td><button className='btn btn-danger' onClick={()=>{deliveryProduct(serial)}}>Delivery</button></td>
      </tr>
       )
   })}
    
  </tbody>
</Table>

        </div>:<div>
         <ModelStockList pumpModel={pumpModel}/>
  
</div>}

        </div>
       
    );
};

export default StockList;