const Users = require('../models/users.model.js')
const bcrypt = require("bcryptjs")
const localStrategy = require('passport-local').Strategy
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      Users.findOne({username: username}, (err, user) => {
        if (err) throw err
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if(result === true) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        })
      })
    })
  )

  passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTAwOTUiLCJuYW1lIjoiSm9obiBEb2UiLCJyb2xlcyI6WyJ3cml0ZXIiLCJtb2RlcmF0b3IiXSwiaWF0IjoxNTIzODE3OTk5LCJleHAiOjE1MjQ0MjI3OTl9.rrpyIW0ftJGna1c_SHH6Hus8hBd2-CUqofaSIUHj0C0'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return Users.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));

  passport.serializeUser((user, cb) => {
    cb(null, user.id)
  })

  passport.deserializeUser((id, cb) => {
    Users.findOne({_id: id}, (err, user) => {
      cb(err, user)
    })
  })
}
