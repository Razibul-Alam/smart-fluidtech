import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home-Page/Home';
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
     <Route exact path="/">
    <Home/>
     </Route>
     </Switch>
    </Router>
  );
}

export default App;
