import React, {useContext, useState} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import './tweetform.css'
import ClearIcon from '@material-ui/icons/Clear';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {dataStatesContext} from './Contexts/dataStatesContext.js'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import axios from 'axios'

function TweetForm() {
  const {tweet, setTweet} = useContext(dataStatesContext)
    const {openedModal, setOpenedModal} = useContext(dataStatesContext)
    const {data, setData} = useContext(dataStatesContext)

    const setModal = () => {
      setOpenedModal(false)
    }

    const submitForm = (e) => {
        e.preventDefault()

        const tweets = {
          tweets: tweet,
          username: data._id
        }
        axios.post('/tweets/add', tweets)
        .then(res => console.log())

      }
console.log(tweet)
    return (
      <div>
        <div className="tweetform">
          <div className="tweetform__modal">
          <form>
          <div className="tweetform__crossicon">
            <ClearIcon onClick={setModal} className="tweetform__crossitem"/>
          </div>
            <div>
            <TextareaAutosize onChange={(e) => setTweet(e.target.value)} className="tweetform_____input" placeholder="What's happening?" maxLength="280"/>
            </div>
            <div className="tweetform__tweetitem">
              <InsertPhotoIcon />
              <GifIcon />
              <EqualizerIcon />
              <EmojiEmotionsIcon />
              <CalendarTodayIcon />
              <button className="button_____tweet">Tweet</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
}

export default TweetForm
