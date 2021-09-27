import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home-Page/Home';
import StockList from './Components/Stock-List/StockList';
import Admin from './Components/Admin/Admin';
import AllPumps from './Components/All-Pumps/AllPumps';
import Delivery from './Components/Delivery-Pump/Delivery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import LoginPage from './Components/Login page/LoginPage';
import PrivateRoute from './Components/Login page/PrivateRoute';


export const userContext=createContext();
function App() {
  const[loggedInUser,setLoggedInUser]=useState({});
  console.log(loggedInUser)
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <Header/>
      <Switch>
     <Route exact path="/allpumps">
    <AllPumps/>
    </Route>
     <PrivateRoute path="/stock/:id" >
     <StockList/>
    </PrivateRoute>
     <Route exact path="/login">
    <LoginPage/>
    </Route>
     <Route exact path="/delivery">
    <Delivery/>
    </Route>
    <Route path="/admin">
      <Admin/>
      </Route>
     <Route exact path="/home">
    <Home/>
     </Route>
     <Route exact path="/">
    <Home/>
     </Route>
     </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
