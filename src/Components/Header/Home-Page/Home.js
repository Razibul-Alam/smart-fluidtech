import React, { useEffect, useState } from 'react';
import ShowProducts from './../../Show-Products/ShowProducts';
import Admin from './../../Admin/Admin';
const Home = () => {
    const[products,setProducts]=useState([])
    
    useEffect(()=>{
        const url='http://localhost:5000/loadAllData'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    
    return (
    <>
    <Admin/>
    <div className='container'>
            <div className='row g-4 mt-5'>
           {products?.map(pd=><ShowProducts products={pd}/>)}
        </div>
        </div>
        </>
    );
};

export default Home;