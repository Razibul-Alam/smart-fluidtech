import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Authority() {
  const { register, handleSubmit, watch, errors } = useForm();
  const[imageUrl,setImageUrl]=useState('')
  const[showButton,setShowButton]=useState(false)
   
console.log(imageUrl.length)
  const onSubmit = data =>{
    console.log(data)
    const eventData={
      category:data.category,
      type:data.type,
      imageUrl:imageUrl
    }
        const url=('https://ancient-beach-26659.herokuapp.com/addBanner');
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
    

    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
      <input className="my-3" name="exampleRequired" type="file" onChange={handleImageUpload}  />
      <input placeholder="Category" category="example" {...register("category",{ required: true })} />
      <input placeholder="type" type="example" {...register("type",{ required: true })} />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
    <input type="submit" />
    </form>
  );
}