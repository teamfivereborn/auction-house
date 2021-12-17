const mongoose = require('mongoose');
const config= require('../config/database')
mongoose.connect(config.database, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
