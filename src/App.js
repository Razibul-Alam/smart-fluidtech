import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import './App.css'
import Home from './Components/Header/Home-Page/Home';
import StockList from './Components/Stock-List/StockList';
import Delivery from './Components/Delivery-Pump/Delivery';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import LoginPage from './Components/Login page/LoginPage';
import Search from './Components/Search/Search';
import AdminAddProduct from './Components/Addmin-Addproduct/AdminAddProduct';
import SingleProduct from './Components/Single-product/SingleProduct';
import CommingSoon from './Components/Comming/CommingSoon';
import UploadDocuments from './Components/Upload-documents/UploadDocuments';
import FooterPage from './Components/Footer/FooterPage';
import NotFound from './Components/Not-Found-page/NotFound';


export const userContext=createContext();
function App() {
  const[loggedInUser,setLoggedInUser]=useState('');
  
  useEffect(()=>{
    const savedData=localStorage.getItem('userDetails');
    console.log(savedData)
    setLoggedInUser(savedData)
    console.log(loggedInUser)
},[])
console.log(loggedInUser?.length)
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <Header/>
      <Switch>
     <Route exact path="/allitems">
    <Search/>
    </Route>
     <Route exact path="/uploaddoc">
    <UploadDocuments/>
    </Route>
     <Route path="/product/:id" >
   <SingleProduct/>
    </Route>
     <Route path="/stock/:id" >
   <StockList/>
    </Route>
     <Route exact path="/login">
    <LoginPage/>
    </Route>
     <Route exact path="/delivery">
    <Delivery/>
    </Route>
     <Route exact path="/comming">
    <CommingSoon/>
    </Route>
    <Route path="/admin">
      <AdminAddProduct/>
      </Route>
     <Route exact path="/home">
    <Home/>
     </Route>
     <Route exact path="/">
    <Home/>
     </Route>
     <Route exact path="8">
    <NotFound/>
     </Route>
     </Switch>
     <FooterPage/>
    </Router>
    </userContext.Provider>
  );
}

export default App;
