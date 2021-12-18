var express = require("express");
var app = express();
const passport = require ("passport");
var port = process.env.PORT ||7000;
var cors = require('cors');

require("./config/passport")(passport);
const nodemailer = require ('nodemailer')


var server = app.listen(port, ()=>{
    console.log(`Express server listening on  ${port}`)
})

// const io = require('socket.io')(server);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());
const users = require("./routes/users");
const { response } = require("express");

io.on('connection', (socket) => {
  //   var counter = 30;
  // var WinnerCountdown = setInterval(function(){
  //   io.sockets.emit('counter', counter);
  //   counter--
  //   if (counter === 0) {
  //     io.sockets.emit('counter', "Congratulations You WON!!");
  //     clearInterval(WinnerCountdown);
  //   }
  // }, 1000);

    console.log('a user connected');


    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
    socket.on('message', (msg) => {
        io.emit('message', `${socket.id.substr(0, 2)} said ${msg}`);
        // event.findOneAndUpdate({},{})
      });
  });

  app.post('/email', (req, res) =>{
    var data = req.body;
    console.log(data);

    let smpTransport = nodemailer.createTransport({
      service : 'Gmail',
      port: 465,
      auth :{
        user: 'all.in.one.customer.services@gmail.com',
        pass : 'Azerty123+'
      }
    });
    let mailOption ={
      from : 'all.in.one.customer.services@gmail.com',
      to : data.email,
      subject : 'welcome to auction house',
      html: `<h3>thank you for enjoy us </h3>
      <h3>you can concatc us phone : 50915806</h3>`
    };
    smpTransport.sendMail(mailOption,(err, response) =>{
      if(err){
        res.send('errorrrrr')
      }else{
        res.send('success')
      }
    })
    smpTransport.close()
  })



  app.use("/users", users);

  app.get("/", (req, res)=>{
    res.send("Invalid endpoint!");
});




