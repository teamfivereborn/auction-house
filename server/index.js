var express = require("express");
var app = express();
const {user}=require('./database-mongodb/schemas.js')
const {event}=require('./database-mongodb/schemas.js')
var port = process.env.PORT ||5000;
var cors = require('cors');
var creatEventRouter = require('./routers/creatEvent.js')

// var signupRouter=require('./routers/signup.js')
// var loginRouter=require('./routers/login')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/creat/event',creatEventRouter)

app.post('/api/signup',(req,res)=>{
    console.log(req.body);
   event.create(req.body).then((data)=>{
       console.log(data);
           res.send(data)
       }).catch((err)=>{
           console.log(err);
       })  
})

app.get('/api/get',(req,res)=>{
  event.find({}).then(data=>{
      res.send(data)
  }).catch(err=>console.log(err))
})

// app.use('/api/signup', signupRouter);
// app.use('/api/login', loginRouter);



// app.get("/hello",(req,res)=>{
//     res.send("hello from express")         
// })





app.listen(port, ()=>{
    console.log(`Express server listening on  ${port}`)
})
