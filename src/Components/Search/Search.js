import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AllPumps from './../All-Pumps/AllPumps';
import Delivery from './../Delivery-Pump/Delivery';

const Search = () => {
  const[searchText,setSearchText]=useState('')
  const[pumpList,setPumpList]=useState([])
  // input handle
  const handleInput=(e)=>{
    setSearchText(e.target.value)
    }
// search button
const searchButton=()=>{
  let url
  if (searchText) {
     url=`https://ancient-beach-26659.herokuapp.com/getItems/${searchText}`
  }else{
    url=`https://ancient-beach-26659.herokuapp.com/getPumps`
  }
  
      
  fetch(url)
  .then(res=>res.json())
  .then(data=>setPumpList(data))
  
}
    
    useEffect(()=>{
        searchButton()
      
  },[searchText])

    return (
      <>
        <div className="text-center d-flex justify-content-center mt-5 row">
          <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <InputGroup>
  <FormControl
    onBlur={handleInput} placeholder="search item by catagory"
  />
  <Button variant="danger" id="button-addon2" onClick={searchButton}>
    Search
  </Button>
</InputGroup>
          </div>
        
        </div>

        <AllPumps pumpList={pumpList}/>
        </>
    );
};

export default Search;