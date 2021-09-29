import {React,useEffect,useState} from 'react';
import { Table} from 'react-bootstrap';
import Search from './../Search/Search';
import { FormControl, InputGroup,Button } from 'react-bootstrap';


const AllPumps = () => {
    const[pumpList,setPumpList]=useState([])
    const[searchText,setSearchText]=useState('')
    const[changeUrl,setChangeUrl]=useState(false)
  useEffect(()=>{
    let url;
    if(changeUrl){
       url=`http://localhost:5000/getItems/${searchText}`
    }else{
      url=`https://ancient-beach-26659.herokuapp.com/getPumps`
    }
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPumpList(data))
    
},[changeUrl])
console.log(pumpList) 

const handleInput=(e)=>{
setSearchText(e.target.value)
}
const handleButton=()=>{
  setChangeUrl(true)
}
console.log(searchText)
    return (
        <div>
         <div className="text-center d-flex justify-content-center mt-5">
        <InputGroup className="mb-3 w-50 col-md-6 col-sm-12">
  <FormControl
    placeholder="search item by catagory"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  onBlur={handleInput}/>
  <Button variant="danger" id="button-addon2" onClick={handleButton}>
    Search
  </Button>
</InputGroup>
        </div>
            <div>
            <h2 className='text-danger text-center my-5'>Total Items {pumpList?.length}</h2>
           <Table striped bordered hover responsive>
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