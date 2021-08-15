import './App.css';
import Home from './home.js'
import HomeFooter from './homefooter.js'
import Login from './login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
        <HomeFooter />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
