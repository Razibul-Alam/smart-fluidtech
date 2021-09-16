import React from 'react';
import { fakeData } from '../../Data/FakeData';
import ShowProducts from './../../Show-Products/ShowProducts';
const Home = () => {
    return (
        <div className='container'>
            <div className='row g-4 mt-5'>
           {fakeData.map(pd=><ShowProducts products={pd}/>)}
        </div>
        </div>
    );
};

export default Home;