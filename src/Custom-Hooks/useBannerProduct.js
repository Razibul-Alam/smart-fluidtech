import { useState, useEffect } from 'react';
const useBannerProduct=()=>{
    const [product,setProduct]=useState([])
    useEffect(()=>{
        const url='https://ancient-beach-26659.herokuapp.com/loadAllData'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return [product]
}
export default useBannerProduct;