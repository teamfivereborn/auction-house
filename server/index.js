const {event,user} =require("./database-mongodb/schemas")

var express = require("express");
var app = express();
const passport = require("passport");
var port = process.env.PORT || 5000;
var cors = require("cors");

require("./config/passport")(passport);
const nodemailer = require ('nodemailer')


var server = app.listen(port, ()=>{
    console.log(`Express server listening on  ${port}`)
})

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


// {
//   user: {
//     id: '61bcf628308cae61f633805f',
//     name: 'amiramir',
//     username: 'amiramir',
//     email: 'amirlimgarbi33@gmail.com'
//   },
//   message: ''
// }

// var counter = 15;

// io.on("connection", (socket) => {
//   console.log("a user connected");

  
//   socket.on("message", function (data) {
    
//     if(data.message==='start'){
      
//       WinnerCountdown = setInterval(function () {
//       io.emit("counter", counter);
//       counter--;
      
//       if (counter === 0) {
//         io.emit("counter", "bid finished");
//         clearInterval(WinnerCountdown);
//       }
//       }, 1000);
//     }

//     counter = 15;
//     io.emit("counter", counter)
//   });

//   socket.on("message", (msg) => {

//     io.emit("message",msg);
    
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });

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
// });

app.post('/email', (req, res) =>{
  var data = req.body;
  

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
          <img scr = "https://www.logomyway.com/logos_new/3992/FULL_HOUSE_AUCTION_05_small.png" />
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

app.get("/", (req, res) => {
  res.send("Invalid endpoint!");
});
app.post('/create',(req,res)=>{
  console.log("oooooooooooooooo",req.body)
  
  event.create(req.body).then((result)=>{
    res.json(result)
  })
  
})
app.get('/events',(req,res)=>{
  event.find().then((result)=>{
   
    res.json(result)
  })
})
app.post('/money',(req,res)=>{
  console.log("hihihihihihihihihihihi",req.body)
  event.create(req.body).then((result)=>{
    res.json(result)
  })
 
})

app.get('/balance/:id',(req,res)=>{
  user.findOne({_id:req.params.id}).then((result)=>{
    res.send(result)
  })
})

app.patch('/users/money/:id',(req,res)=>{
    //  console.log(req.params.id);
    user.findOneAndUpdate({_id:req.params.id}, { $inc: { balance:req.body.balance }},{new:true},(err,data)=>{
        if(err){
            console.log(err);
        }else(
            res.send(data)
        )
    }) 
  })

  app.get('/',(req,res)=>{
    res.send('working')
  })
  