import React, {useContext, useState} from 'react'
import './navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {dataStatesContext} from './Contexts/dataStatesContext.js'
import { useHistory } from "react-router-dom";
import TweetForm from './tweetform.js'

function Navbar() {

  const {openedModal, setOpenedModal} = useContext(dataStatesContext)

  const setModal = () => {
    setOpenedModal(true)
  }

  const history = useHistory()

  const {data, setData} = useContext(dataStatesContext)

  const values = [
    {name: "Home", icon:<HomeIcon />},
    {name: "Explore", icon: <ExploreIcon />},
    {name:"Notifications", icon: <NotificationsIcon />},
    {name: "Messages", icon: <EmailIcon />},
    {name: "Saved", icon: <BookmarkIcon />},
    {name: "Lists", icon: <ListAltIcon />},
    {name: "Profile", icon: <PersonIcon />},
    {name: "More options", icon: <MoreHorizIcon /> },
  ]


    return (
        <div>
          <div className="tweetpage_____leftsection">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" className="twitterlogo____tweetpage"/>
            {values.map(btn => {
              return <button className="navbar______button">{btn.icon} {btn.name}</button>
            })}
            <button className="tweet_____button" onClick={setModal}>Tweet</button>
            {data.username}
            <br />
            @{data.username}
          </div>
          {openedModal ? <TweetForm /> : void 0}
        </div>
    )
}

export default Navbar
