import './App.css';
import React, {useState, useContext} from 'react'
import Home from './home.js'
import HomeFooter from './homefooter.js'
import Login from './login.js'
import Tweetpage from './tweetpage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { dataStatesContext } from './Contexts/dataStatesContext.js'

function App() {
  const [data, setData] = useState(null)
  const [openedModal, setOpenedModal] = useState(false)
  const [tweet, setTweet] = useState("")
  const [clickedPost, setClickedPost] = useState(false)

  return (
    <div>
    <dataStatesContext.Provider value={{data, setData, openedModal, setOpenedModal, tweet, setTweet, clickedPost, setClickedPost}}>
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
        <HomeFooter />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/home">
        <Tweetpage />
      </Route>
  </Switch>
  </Router>
  </dataStatesContext.Provider>
      </div>
  );
}

export default App;
