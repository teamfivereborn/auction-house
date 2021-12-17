var express = require("express");
var app = express();
const passport = require ("passport");
var port = process.env.PORT ||5000;
var cors = require('cors');

require("./config/passport")(passport);



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

io.on('connection', (socket) => {
  
  console.log('a user connected');



    var counter = 50;
  var WinnerCountdown = setInterval(function(){
    
    io.emit('counter', counter);
    counter--
    // console.log('counter',counter);
    if (counter === 0) {
      io.emit('counter', "Congratulations You WON!!");
      clearInterval(WinnerCountdown);
    }

    // socket.on('countDown',(counter)=>{
    //   io.emit('c',counter)

    // })

  }, 1000);



    
    socket.on('message', (msg) => {
        io.emit('message', `${socket.id.substr(0, 2)} bidded for the amount of ${msg} coin`);
        // event.findOneAndUpdate({},{})
      });

      
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });





app.use("/users", users);

app.get("/", (req, res)=>{
    res.send("Invalid endpoint!");
});




