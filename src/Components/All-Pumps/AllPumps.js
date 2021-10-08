import React from 'react';
import { Table} from 'react-bootstrap';
const AllPumps = ({pumpList}) => {
    return (
        <div>
            <div>
            <h2 className='text-light text-center my-5'>Total Items {pumpList?.length}</h2>
           <Table bordered responsive className='text-light'>
  <thead>
    <tr>
      <th>SL</th>
      <th>Model</th>
      <th>Category</th>
      <th>Origin</th>
      <th>Manufacture</th>
      <th>Serial</th>
    </tr>
  </thead>
  <tbody>
  {pumpList?.map((pd,index)=>{
       const{model,serial,category,origin,manufacture}=pd
       return(
        <tr>
        <td>{index+1}</td>
        <td>{model}</td>
        <td>{category}</td>
        <td>{origin}</td>
        <td>{manufacture}</td>
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