const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

//154517560877-lcjnf537v3sgddc6msmcpov981fnm3cv.apps.googleusercontent.com
//kM452XkJG5uyzDoKobHSYuLS

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);