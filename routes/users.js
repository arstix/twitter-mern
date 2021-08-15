const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")

const Users = require('../models/users.model.js')
const passport = require("passport")

require('../authentication/passportConfig.js')(passport)


router.route('/').get((req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err))
})


router.route('/login').post((req, res, next) => {
  passport.authenticate("local" , {session: false}, (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(400).send("No user exists");
    else {
      req.logIn(user, {session: false}, err => {
        if (err) throw error;
          res.json(user)
      })
    }
  })(req, res, next)
})



router.route('/add').post(async(req,res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const username = req.body.username
  const password = hashedPassword
  const email = req.body.email
  const phone = req.body.phone
  const monthOfBirth = req.body.monthOfBirth
  const dayOfBirth = req.body.dayOfBirth
  const yearOfBirth = req.body.yearOfBirth

  const newUsers = new Users({
    username,
    password,
    email,
    phone,
    monthOfBirth,
    dayOfBirth,
    yearOfBirth
  })

  newUsers.save()
  .then (() => res.json("User Added"))
  .catch(err => res.status(400).json('error' + err))
})



module.exports = router
