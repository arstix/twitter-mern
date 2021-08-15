import React, {useState} from 'react'
import './home.css'
import twitterWhite from './images/pngegg.png'
import Signup from './signup.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  const [openedModal, setOpenedModal] = useState(false)

  const openModal = () => {
      setOpenedModal(true)
  }
    return (
        <div className="homepage___main">
          <div>
            <img src={twitterWhite} className="homepage___logo"/>
              <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" className="homepage___image"/>
          </div>
            <div className="div_____twitterhome">
                <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" className="twitterLogo____image"/>
                <h1 className="twitter___mainpagetext">Happening Now</h1>
                <p className="twitter___mainpagesubtext">Join Twitter today.</p>
                <button className="twitter___homebutton" onClick={openModal}>Sign up</button>
                {openedModal ? <Signup /> : void 0}
              <div>
                <Link to="/login"><button className="twitter___homelogin">Log in</button></Link>
              </div>
            </div>
        </div>

    )
}

export default Home
