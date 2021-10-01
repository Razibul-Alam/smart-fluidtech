import React,{useState,useEffect} from 'react';
import { FormControl, InputGroup, Table, Button } from 'react-bootstrap';

const Delivery = () => {
    const[deliveryList,setDeliveryList]=useState([])
    const[searchText,setSearchText]=useState('')
    
    // useEffect(()=>{
    //     const url='https://ancient-beach-26659.herokuapp.com/allDeliveryList'
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setDeliveryList(data))
    // },[])
  // search button controll
   // input handle
   const handleInput=(e)=>{
    setSearchText(e.target.value)
    }
// search button
const searchButton=()=>{
  let url
  if (searchText) {
     url=`https://ancient-beach-26659.herokuapp.com/showPump/${searchText}`
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
    return (
      
        <div>
          <div className="text-center d-flex justify-content-center mt-5">
       
        <InputGroup className="mb-3 w-75">
  <FormControl
    onBlur={handleInput} placeholder="search item by catagory"/>
  <Button variant="danger" id="button-addon2" onClick={searchButton}>
    Search
  </Button>
</InputGroup>
        </div>
          <h2 className="text-danger text-center my-3">{deliveryList.length} Items</h2>
      <Table striped bordered hover responsive>
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
      
    </tr>)}
     

  
</tbody>
</Table>
  
</div>

    );
};

export default Delivery;