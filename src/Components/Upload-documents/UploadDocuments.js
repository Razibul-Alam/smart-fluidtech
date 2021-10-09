import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button,InputGroup,FormControl } from 'react-bootstrap';

const UploadDocuments = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const[imageUrl,setImageUrl]=useState('')
  const[showButton,setShowButton]=useState(false)

// ........
const onSubmit = data =>{
    const eventData={
      name:data.name,
       imageUrl:imageUrl
    }
        const url=('https://ancient-beach-26659.herokuapp.com/addDocument');
      console.log(eventData);

      axios.post(url,eventData)
      .then(res=>console.log(res))
      
  }
    
    

    
  

  const handleImageUpload=event=>{
    console.log(event.target.files[0])
    const imageData=new FormData()
    imageData.set("key","cd8b0025cccd4015a70e149fd2ab8ad0")
    imageData.append("image",event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(function(response){
      setImageUrl(response.data.data.display_url);
      console.log(response.data.data.display_url)
      setShowButton(true)
    })
  }

   
    return (
    <>
    <h2 className='text-center text-primary mt-4'>Upload Document</h2>
   <div className='row  my-4 mx-2'>
   <form className="text-center col-lg-6 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    type='file' name="exampleRequired"  onChange={handleImageUpload}/>
  </InputGroup>
  <input className='form-control mb-3' placeholder="Name" category="example" {...register("name",{ required: true })} />
  <Button as="input" type="submit" value="Submit" className='form-control' />

    </form>
   </div>
    </>
    );
};

export default UploadDocuments;