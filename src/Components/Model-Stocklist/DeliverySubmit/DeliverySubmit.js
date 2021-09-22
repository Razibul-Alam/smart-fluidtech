import React from 'react';
import { useForm } from "react-hook-form";

const DeliverySubmit = ({deliveryInfo}) => {
    console.log(deliveryInfo)
    const {serial,model,category}=deliveryInfo;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // onsubmit handle
    const onSubmit = data =>{
    console.log(data)
        fetch('http://localhost:5000/addDeliveryProduct',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({data})
        })
        
    };
    // add product from fake data
    

    return (
        <div>
           {/* react hook form */}
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Model" defaultValue={model} {...register("model")} />
      <input placeholder="Category" defaultValue={category} {...register("category", { required: true })} />
      <input placeholder="Serial" defaultValue={serial}  {...register("serial", { required: true })} />
      <input type="submit" />
    </form>
        
  
        </div>
    );
};

export default DeliverySubmit;