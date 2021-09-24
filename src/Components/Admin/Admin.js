import React from 'react';
import { fakeData } from '../Data/FakeData';
import { useForm } from "react-hook-form";
import Authority from './../Authotity/Authority';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // onsubmit handle
    const onSubmit = data =>{
    console.log(data)
        fetch('https://ancient-beach-26659.herokuapp.com/addProduct',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({data})
        })
        
    };
    
    return (
        <>
        <div className="text-center">
            <h2>Add main home page banner</h2>
            <Authority/>
        </div>
        <div className="mt-4 text-center">
            <h2>Add product</h2>
           {/* react hook form */}
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Model" defaultValue="" {...register("model")} />
      <input placeholder="category" defaultValue="" {...register("category", { required: true })} />
      <input placeholder="type" defaultValue="" {...register("type", { required: true })} />
      <input placeholder="Serial" {...register("serial", { required: true })} />
      <input type="submit" />
    </form>
        
  
        </div>
        </>
    );
};

export default Admin;