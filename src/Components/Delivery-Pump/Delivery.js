import React,{useState,useEffect} from 'react';
import { FormControl, InputGroup, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
const Delivery = ({allItemShow}) => {
  const history=useHistory()
    const[deliveryList,setDeliveryList]=useState([])
    const[searchText,setSearchText]=useState('')
   // input handle
   const handleInput=(e)=>{
    setSearchText(e.target.value)
    }
// search button
const searchButton=()=>{
  let url
  if (searchText) {
     url=`https://ancient-beach-26659.herokuapp.com/showPump/${searchText.toLocaleLowerCase()}`
  }else{
    url='https://ancient-beach-26659.herokuapp.com/allDeliveryList'
  }
  
      
  fetch(url)
  .then(res=>res.json())
  .then(data=>setDeliveryList(data))
  
}
    
    useEffect(()=>{
        searchButton()
      
  },[searchText])

  const removeProduct=(id)=>{
    console.log(id)
     fetch(`https://ancient-beach-26659.herokuapp.com/remove/${id}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(result=>console.log(result))
    alert('the item removed')
    history.go(0)
   
        }
    return (
      
        <div>
          <div className="text-center d-flex justify-content-center mt-5">
       
        <InputGroup className="mb-3 w-75">
  <FormControl
    onBlur={handleInput} placeholder="search by Challan no"/>
  <Button variant="danger" id="button-addon2" onClick={searchButton}>
    Search
  </Button>
</InputGroup>
        </div>
          <h2 className="text-danger text-center my-3">{deliveryList.length} Items</h2>
      <Table bordered hover responsive variant='dark'>
      <thead>
        <tr>
          <th>SL</th>
          <th>Model</th>
          <th>Category</th>
          <th>Serial</th>
          <th>Date</th>
          <th>Challan</th>
          <th>Place</th>
          <th>person</th>
          {allItemShow&&<th>Action</th>}
        </tr>
      </thead>
      <tbody>

      
     {deliveryList.map((item,index)=><tr>
      <td>{index+1}</td>
      <td>{item.model}</td>
      <td>{item.category}</td>
      <td>{item.serial}</td>
      <td>{item.date}</td>
      <td>{item.challan}</td>
      <td>{item.place}</td>
      <td>{item.person}</td>
      {allItemShow&&<td><button className='btn btn-danger'onClick={()=>{removeProduct(item._id)}}>Remove</button></td>}
      
    </tr>)}
     

  
</tbody>
</Table>
  
</div>

    );
};

export default Delivery;