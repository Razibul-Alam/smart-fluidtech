import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
const StockList = () => {
  const{id}=useParams()
  const[stocks,setStocks]=useState([])
  useEffect(()=>{
    const url=`http://localhost:5000/singleData/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setStocks(data[0]))
},[])
console.log(stocks) 
    return (
        <div>
            <h2 className='text-danger text-center my-5'>{stocks?.model} list</h2>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>SL</th>
      <th>Model</th>
      <th>Stock</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {stocks?.allData?.map((pd,index)=>{
       const{model,stock}=pd
       const handleDecrease=(stock)=>{
        const newStock=stocks-1
        setStocks(newStock)

            }
       return(
        <tr>
        <td>{index+1}</td>
        <td>{model}</td>
        <td>{stock}</td>
        <td><button className='btn btn-warning' onClick={()=>{handleDecrease(stock)}}>Decrease</button></td>
      </tr>
       )
   })}
    
  </tbody>
</Table>
        </div>
    );
};

export default StockList;