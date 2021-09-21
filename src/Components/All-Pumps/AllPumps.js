import {React,useEffect,useState} from 'react';
import { Table } from 'react-bootstrap';

const AllPumps = () => {
    const[pumpList,setPumpList]=useState([])
  useEffect(()=>{
    const url=`https://ancient-beach-26659.herokuapp.com/getPumps`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPumpList(data))
},[])
console.log(pumpList) 
    return (
        <div>
            <div>
            <h2 className='text-danger text-center my-5'>Total Pumps {pumpList?.length}</h2>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>SL</th>
      <th>Model</th>
      <th>Category</th>
      <th>Serial</th>
    </tr>
  </thead>
  <tbody>
  {pumpList?.map((pd,index)=>{
       const{model,serial,category}=pd
      //  const handleDecrease=async(id)=>{
      //   console.log(id)
      //   const response = await fetch(`https://ancient-beach-26659.herokuapp.com/delete/${id}`, {
      //     method: "DELETE"
      //   });
      //   return response.json();
      //       }
       return(
        <tr>
        <td>{index+1}</td>
        <td>{model}</td>
        <td>{category}</td>
        <td>{serial}</td>
      </tr>
       )
   })}
    
  </tbody>
</Table>
        </div>
        </div>
    );
};

export default AllPumps;