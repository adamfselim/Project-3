// var express = require('express');
// var passport = require('passport');
// var app = express();
// app.use(passport.initialize());
// app.use(passport.session());


// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

//   app.post('/signUp', function(req, res) {
//     res.send('helloworld');
//   });

//   app.get('/',  function(req, res) {
//     res.send('helloworld');
//   });

//   app.listen(3000, () => console.log('✅  Listening on 3000'));

const express = require('express');
const app = express();
const passport   = require('passport');
const session    = require('express-session');
const bodyParser = require('body-parser');
// const env = require('dotenv').load();
const env = require('dotenv').config()

//For Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {

   console.log('Nice! Database looks fine')

}).catch(function(err) {

   console.log(err, "Something went wrong with the Database Update!")

});



app.get('/', function(req, res) {

   res.send('Welcome to Passport with Sequelize');

});


app.listen(3000, function(err) {

   if (!err)
       console.log("Site is live");
   else console.log(err)

});
