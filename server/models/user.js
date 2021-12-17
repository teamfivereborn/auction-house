
const bcrypt = require("bcryptjs");
const {user}=require('../database-mongodb/schemas')

module.exports.getUserById = function(id, callback){
    const query = {_id: id};
    user.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback){
    const query = {email: email};
    user.findOne(query, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    user.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    user.findOne({username : newUser.username}, (err, userr) => {
        if(userr) {
            callback(new Error("User already registered."), userr);
        }
        else {
            user.findOne({email: newUser.email}, (err, userr) => {
                if(userr) {
                    callback(new Error("Email already registered."), userr);
                }
                else {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save(callback);
                        });
                    });
                }
            })
        }
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}