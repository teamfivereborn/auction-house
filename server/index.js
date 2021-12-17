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
    var counter = 30;
  var WinnerCountdown = setInterval(function(){
    io.sockets.emit('counter', counter);
    counter--
    if (counter === 0) {
      io.sockets.emit('counter', "Congratulations You WON!!");
      clearInterval(WinnerCountdown);
    }
  }, 1000);

    console.log('a user connected');


    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
    socket.on('message', (msg) => {
        io.emit('message', `${socket.id.substr(0, 2)} said ${msg}`);
        // event.findOneAndUpdate({},{})
      });
  });

// app.post('/api/signup',(req,res)=>{
//     console.log(req.body);
//    event.create(req.body).then((data)=>{
//        console.log(data);
//            res.send(data)
//        }).catch((err)=>{
//            console.log(err);
//        })  
// })

// app.get('/api/get',(req,res)=>{
//   event.find({}).then(data=>{
//       res.send(data)
//   }).catch(err=>console.log(err))
// })

// app.use('/api/signup', signupRouter);
// app.use('/api/login', loginRouter);



// app.get("/hello",(req,res)=>{
//     res.send("hello from express")         
// })



app.use("/users", users);

app.get("/", (req, res)=>{
    res.send("Invalid endpoint!");
});

// app.get("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });


