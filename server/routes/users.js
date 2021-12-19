const express = require("express");
const router = express.Router();
const passport = require ("passport");
const jwt = require ("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/database");
const {user}=require('../database-mongodb/schemas')
router.post("/register", (req, res, next) => {
    let newUser = new user ({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    User.addUser(newUser, (err, data)=> {
        if(err){
            res.json({success: false, msg: err.message});
        }
        else {
            res.json({success: true, msg: "User registered."});
        }
    });
});

router.post("/authenticate", (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: "User not found."});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800,
                });
                res.json({
                    succes: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
            else {
                return res.json({success: false, msg: "Wrong password."});
            }
        });
    });
});

router.get("/profile", passport.authenticate("jwt", {session: false}), (req, res, next)=>{
    res.json({
        user: req.user
    });
});

module.exports = router;