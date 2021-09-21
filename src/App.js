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

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
     <Route exact path="/allpumps">
    <AllPumps/>
    </Route>
     <Route exact path="/delivery">
    <Delivery/>
    </Route>
     <Route path="/stock/:id">
   <StockList/>
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
  );
}

export default App;
