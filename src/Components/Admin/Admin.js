import React, { useContext } from 'react';
import { fakeData } from '../Data/FakeData';
import { useForm } from "react-hook-form";
import Authority from './../Authotity/Authority';
import { userContext } from './../../App';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // onsubmit handle
    const onSubmit = data =>{
    
        fetch('https://ancient-beach-26659.herokuapp.com/addProduct',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({data})
        })
        .then(res=>console.log(res))
        // window.location.reload(false)
    };
    
    return (
        <>
        <div className="text-center">
            <h2>Add main home page banner</h2>
            <Authority/>
        </div>
        <div className="mt-4 d-flex justify-content-center">
         <div className="w-50 bg-dark p-4 rounded">
         <h2 className="text-center text-danger">Add product</h2>
           {/* react hook form */}
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Model" defaultValue="" {...register("model")} className="form-control mt-2" />
      <input placeholder="category" defaultValue="" {...register("category", { required: true })} className="form-control mt-2" />
      <input placeholder="type" defaultValue="" {...register("type", { required: true })} className="form-control mt-2"/>
      <input placeholder="Origin" defaultValue="" {...register("origin", { required: true })} className="form-control mt-2"/>
      <input placeholder="Manufacture" defaultValue="" {...register("manufacture", { required: true })} className="form-control mt-2"/>
      <input placeholder="Serial" {...register("serial", { required: true })} className="form-control mt-2"/>
      <input type="submit" className="form-control mt-2 bg-primary"/>
    </form>
         </div>
        
  
        </div>
        </>
    );
};

export default Admin;