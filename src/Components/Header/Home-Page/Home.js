import React, { useEffect, useState,useContext } from 'react';
import { userContext } from './../../../App';
import ToastMessage from './../../Toast-message/ToastMessage';
import MediaCard from './../../Product-Card/ProductCard';
import TextScroller from './../../Text-Animation/TextScroller';
const Home = () => {
    const[products,setProducts]=useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(()=>{
        const url='https://ancient-beach-26659.herokuapp.com/loadAllData'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(products)
    
    return (
    <>
    <div className="d-flex justify-content-center my-4">
    {loggedInUser&&<ToastMessage/>}
    </div>
    <TextScroller/>
    <div className='container'>
      
            <div className='row g-4 mt-3'>
           {products?.map((pd,index)=><MediaCard products={pd} key={index}/>)}
        </div>
        </div>
        </>
    );
};

export default Home;