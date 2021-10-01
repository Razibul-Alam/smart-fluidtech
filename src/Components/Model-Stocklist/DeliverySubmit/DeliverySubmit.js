import React,{useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import { userContext } from './../../../App';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ToastMessage from './../../Toast-message/ToastMessage';



const DeliverySubmit = ({deliveryInfo,handleClose}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const{show,setShow}=useState(false)
    console.log(deliveryInfo)
    const {serial,model,category}=deliveryInfo;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    // onsubmit handle
    const onSubmit = data =>{
        const itemData={
            model:model,
            category:category,
            serial:serial,
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
        history.replace('/')
        handleClose()   
    };
    // add product from fake data
    

    return (
        <>
        {show?<div>
            <ToastMessage/>
        </div>:<div>
           {/* react hook form */}
           <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control mt-3" placeholder="Challan"  {...register("challan", { required: true })} /> 
      <input className="form-control mt-3" placeholder="Delivery to" {...register("place", { required: true })} />
     <Button variant="primary" type="submit">Submit</Button>
    </form>
        </div>}
        </>
    );
};

export default DeliverySubmit;