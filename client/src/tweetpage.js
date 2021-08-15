import React, {useContext, useEffect, useState} from 'react'
import './tweetpage.css'
import Navbar from './navbar.js'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextareaAutosize from 'react-textarea-autosize';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import CachedIcon from '@material-ui/icons/Cached';
import {dataStatesContext} from './Contexts/dataStatesContext.js'
import { useHistory } from "react-router-dom";
import { InputAdornment } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import axios from 'axios'
import Answerform from './answerform.js'



function Tweetpage() {
  const {tweet, setTweet} = useContext(dataStatesContext)
  const {data, setData} = useContext(dataStatesContext)
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const {clickedPost, setClickedPost} = useState(dataStatesContext)


  const chatPopUp = () => {
    setModal(true)
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
    
    useEffect(() => {
        axios.get('/tweets')
        .then(res => setPosts(res.data))
    }, [submitForm])

    return (
        <div className="tweetpage_____div">
          <Navbar />
          <div className="tweetpage____tweetit">
              <div className="tweetpage__border">
                <h1 className="tweetpage_____home">Home</h1>
                <form onSubmit={submitForm}>
                <TextareaAutosize onChange={(e) => setTweet(e.target.value)} className="tweetpage_____input" placeholder="What's happening?" maxLength="280"/>
                <div className="tweetpage_____icons">
                  <InsertPhotoIcon />
                  <GifIcon />
                  <EqualizerIcon />
                  <EmojiEmotionsIcon />
                  <CalendarTodayIcon />
                    <button className="button_____tweet">Tweet</button>
                </div>
                </form>
                {posts.map((post, i) => {
                  return <div className="posts___tweets" key={i}>
                  <div>
                  <p className="posts___tweets___username">
                    {post.username.username}  @{post.username.username}
                    </p>
                  </div>
                  <div>
                    <p>
                    {post.tweets}
                    </p>
                  </div>
                    <div className="tweets__icons">
                      <ChatBubbleOutlineIcon onClick={chatPopUp}/>
                      <CachedIcon />
                      <FavoriteBorderIcon />
                      <ShareIcon />
                    </div>
                  </div>
                })}
              </div>
          </div>
          <div className="tweetpage_____search">
            <Input
            disableUnderline={true}
            placeholder="Search on Twitter"
       className="tweet__searchitem"
       startAdornment={
         <InputAdornment position="start">
           <SearchIcon />
         </InputAdornment>
       } />

          </div>
            {modal ? <Answerform /> : void 0}
        </div>
    )
}

export default Tweetpage
