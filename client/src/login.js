import React, {useState, useContext} from 'react'
import './login.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {dataStatesContext} from './Contexts/dataStatesContext.js'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {data, setData} = useContext(dataStatesContext)

    const history = useHistory()


    const onChangeUsername = (e) => {
      setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value)
    }

    const onSubmit = (e) => {
  e.preventDefault()

  const users = {
    username: username,
    password: password
  }

  axios.post('/users/login', users)
  .then(res => {
    if(res.status === 200) {
      setData(res.data)
      history.push("/home")
    }
    else if(res.status === 400) {
      history.push("/login")
  }
  })
}



    return (
        <div>
          <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" className="twitterlogo____image"/>
          <h1 className="login_____headertext">Log in to Twitter</h1>
          <div className="placeholder_____global">
          <form onSubmit={onSubmit}>
            <input className="placeholder____div" placeholder="Phone, email or username" onChange={onChangeUsername}/>
            <div>
              <input className="placeholder____div" placeholder="Password" type="password" onChange={onChangePassword}/>
            </div>
            <div>
              <button className="twitter___loginbuttonpage">Log in</button>
            </div>
            </form>
            <div className="forgetPassword_____div">
              <p>Forgot password?</p>
              <p>·</p>
              <p>Sign up for Twitter</p>
            </div>
          </div>
        </div>
    )
}

export default Login
