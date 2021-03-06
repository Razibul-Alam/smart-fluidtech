import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AllPumps from './../All-Pumps/AllPumps';
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
     url=`https://ancient-beach-26659.herokuapp.com/getItems/${searchText.toLocaleLowerCase()}`
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
          
          <InputGroup className='w-75'>
  <FormControl
    onBlur={handleInput} placeholder="sensor,controller,pump,flowmeter"
  />
  <Button variant="danger" id="button-addon2" onClick={searchButton}>
    Search
  </Button>
</InputGroup>
      </div>

        <AllPumps pumpList={pumpList}/>
        </>
    );
};

export default Search;