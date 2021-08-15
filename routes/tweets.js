const express = require('express');
const router = express.Router();

const Tweets = require('../models/tweets.model.js')

router.route('/').get((req, res) => {
  Tweets.find()
    .populate("username")
    .sort({_id: -1})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const tweets = req.body.tweets
  const replies = req.body.replies
  const username = req.body.username

  const newPost = new Tweets({
    tweets,
    replies,
    username
  })

  newPost.save()
  .then (() => res.json(newPost))
  .catch(err => res.status(400).json('error' + err))
})

module.exports = router
