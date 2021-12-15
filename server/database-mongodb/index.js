const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/auction';
const mongodb_URI='mongodb+srv://root:root@auction-house.izmbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongodb_URI, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
