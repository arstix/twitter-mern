import React, {useState, useEffect, useContext} from 'react'
import './answerform.css'
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios'
import {dataStatesContext} from './Contexts/dataStatesContext.js'

function Answerform() {
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([])
  const {clickedPost, setClickedPost} = useState(dataStatesContext)
  const {data, setData} = useContext(dataStatesContext)
  const {tweet, setTweet} = useContext(dataStatesContext)

  const modalChange = () => {
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
  }, [])

console.log(posts)

    return (
      <div className="tweetform__answer__main">
        <div className="tweetform__modal">
            <form onSubmit={submitForm}>
            <div className="tweetform__crossicon">
            {posts.filter(post => post._id === post._id).map(filteredName => (
              <div>
                {filteredName.tweets}
              </div>
            ))}
              <ClearIcon onClick={modalChange} className="tweetform__crossitem"/>
            </div>
            </form>
        </div>
      </div>
    )
}

export default Answerform
