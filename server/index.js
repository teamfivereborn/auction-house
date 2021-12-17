var express = require("express");
var app = express();
const passport = require("passport");
var port = process.env.PORT || 5000;
var cors = require("cors");

require("./config/passport")(passport);

var server = app.listen(port, () => {
  console.log(`Express server listening on  ${port}`);
});

// const io = require('socket.io')(server);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
const users = require("./routes/users");



var counter = 15;
WinnerCountdown = setInterval(function () {
  io.emit("counter", counter);
  counter--;

  if (counter === 0) {
    io.emit("counter", "bid finished");
    clearInterval(WinnerCountdown);
  }
}, 1000);





io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", function (data) {
    counter = 15;
    io.emit("counter", counter);
  });

  socket.on("message", (msg) => {
    io.emit(
      "message",
      `${socket.id.substr(0, 2)} bidded for the amount of ${msg} coin`
    );
    // event.findOneAndUpdate({},{})
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // var c=0

  //   var WinnerCountdown=null
  //     socket.on('message', (msg) => {
  //       if(msg){
  //         if(WinnerCountdown||c){clearInterval(WinnerCountdown)
  //           WinnerCountdown=null
  //         c=0}
  //         var counter = 20;
  //          WinnerCountdown= setInterval(function(){

  //           io.emit('counter', counter);
  //           counter--
  //           c=counter
  //           console.log(c);
  //           if (counter === 0) {
  //             io.emit('counter', "bid finished");
  //             clearInterval(WinnerCountdown);
  //             c=0
  //           }

  //         }, 1000)
  //       }

  //     })
});

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Invalid endpoint!");
});
