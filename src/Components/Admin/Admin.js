import React from 'react';
import { fakeData } from '../Data/FakeData';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // onsubmit handle
    const onSubmit = data =>{
    console.log(data)
        fetch('http://localhost:5000/addProduct',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({data})
        })
        
    };
    // add product from fake data
    const addProduct=()=>{
        fetch('http://localhost:5000/addProduct', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(fakeData)
           });
    }
    

    return (
        <div>
           <button onClick={addProduct}>Add Product</button>
           {/* react hook form */}
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Model" defaultValue="" {...register("model")} />
      <input placeholder="Category" defaultValue="" {...register("category", { required: true })} />
      <input placeholder="Serial" {...register("serial", { required: true })} />
      <input type="submit" />
    </form>
        
  
        </div>
    );
};

export default Admin;