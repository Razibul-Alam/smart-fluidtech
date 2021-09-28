import React, { useEffect, useState,useContext } from 'react';
import ShowProducts from './../../Show-Products/ShowProducts';
import { userContext } from './../../../App';
const Home = () => {
    const[products,setProducts]=useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    
    
    useEffect(()=>{
        const url='https://ancient-beach-26659.herokuapp.com/loadAllData'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    
    return (
    <>
    <div className='container'>
            <div className='row g-4 mt-5'>
           {products?.map((pd,index)=><ShowProducts products={pd} key={index}/>)}
        </div>
        </div>
        </>
    );
};

export default Home;