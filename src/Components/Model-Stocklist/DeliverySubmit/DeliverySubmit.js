import React,{useContext} from 'react';
import { useForm } from "react-hook-form";
import { userContext } from './../../../App';

const DeliverySubmit = ({deliveryInfo,handleClose}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(deliveryInfo)
    const {serial,model,category}=deliveryInfo;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // onsubmit handle
    const onSubmit = data =>{
        const itemData={
            model:data.model,
            category:data.category,
            serial:data.serial,
            date:new Date().toLocaleDateString(),
            challan:data.challan,
            place:data.place,
            person:loggedInUser,
            
                }
        fetch('https://ancient-beach-26659.herokuapp.com/addDeliveryProduct',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(itemData)
        })
        .then(res=>console.log(res))
        handleClose()
        
    };
    // add product from fake data
    

    return (
        <div>
           {/* react hook form */}
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Model" defaultValue={model} {...register("model")} />
      <input placeholder="Category" defaultValue={category} {...register("category", { required: true })} />
      <input placeholder="Serial" defaultValue={serial}  {...register("serial", { required: true })} />
      <input placeholder="Challan"  {...register("challan", { required: true })} /> 

      <input placeholder="Delivery to" {...register("place", { required: true })} />
      {/* <input placeholder="Delivery person" {...register("person", { required: true })} /> */}
      
      <input type="submit" />
    </form>
        
  
        </div>
    );
};

export default DeliverySubmit;