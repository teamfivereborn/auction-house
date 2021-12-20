const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  id:{type:Number},
  name : {
      type: String,
  },
  email : {
      type: String,
      required: true,
  },
  username : {
      type: String,
      required: true,
  },
  password : {
      type: String,
      required: true,
  },
  balance:{ type: Number, default: 0 }
});
userSchema.plugin(AutoIncrement, {id:'id_seq',inc_field: 'id'});
const user = mongoose.model('user', userSchema);

const eventSchema = new mongoose.Schema({
  balance:String,
  ownerid:String,
  title: String,
  img: String,
  descriptions:String,
  startPrice: String,
  StartDate:String,
  status:{ type: String, default: 'waiting' },
  winnerid:{ type: Number, default: 0 },
  endDate:String,

});


const event = mongoose.model('event', eventSchema);

const participantSchema = new mongoose.Schema({
  userId: String,
  eventId: String,
  password:String
});
const participant = mongoose.model('participant', participantSchema);

const currentSchema = new mongoose.Schema({
  userId: String,
  val: String,
  
});
const current = mongoose.model('current', currentSchema);

module.exports ={
  user,
  event,
  participant,
  current
} 