var express = require("express");
var app = express();
const passport = require ("passport");
var port = process.env.PORT ||5000;
var cors = require('cors');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const users = require("./routes/users");

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);


app.use("/users", users);

app.get("/", (req, res)=>{
    res.send("Invalid endpoint!");
});

// app.get("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });


app.listen(port, ()=>{
    console.log(`Express server listening on  ${port}`)
})
