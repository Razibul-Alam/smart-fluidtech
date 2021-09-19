import React from 'react';
import { fakeData } from '../Data/FakeData';

const Admin = () => {
    const addProduct=()=>{
        fetch('http://localhost:5000/addProduct', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(fakeData)
           });
    }
    return (
        <div>
           <button onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default Admin;