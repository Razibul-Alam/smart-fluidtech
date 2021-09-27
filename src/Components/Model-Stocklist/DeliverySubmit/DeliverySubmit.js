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
    console.log(data)
    const user=loggedInUser.name
        fetch('https://ancient-beach-26659.herokuapp.com/addDeliveryProduct',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({data})
        })
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
      <input placeholder="date" defaultValue={new Date().toLocaleDateString()}  {...register("date", { required: true })} />

      <input placeholder="Delivery to" {...register("place", { required: true })} />
      
      <input type="submit" />
    </form>
        
  
        </div>
    );
};

export default DeliverySubmit;